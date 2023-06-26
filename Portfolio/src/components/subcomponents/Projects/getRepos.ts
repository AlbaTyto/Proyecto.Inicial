import { Filter } from "./RepoTypes";
// import * as fs from 'fsnpm f';

const gitUser: string | undefined = import.meta.env.VITE_GITHUB_USER;
console.log(gitUser);

const gitToken: string | undefined = import.meta.env.VITE_GITHUB_TOKEN;
console.log(gitToken);

export async function getRepos(): Promise<Filter[] | undefined> {
  try {
    const row_repos = await fetch(
      `https://api.github.com/user/repos?visibility=all`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          Authorization: `Bearer ${gitToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data: Filter[]) => {
        // Aquí puedo trabajar con los datos obtenidos de la API de GitHub
      //   console.log(data);
      //   fs.writeFile('archivo.json', JSON.stringify(data),'utf8', (err) => { 
      //   if (err) throw err; 
      //   console.log('The file has been saved!');
      // })
        return data;
      });
      
    //   stargazers_count
    const select3 = row_repos.filter(
      (rep) =>
        rep.stargazers_count > 0 &&
        rep.updated_at.includes("2023") &&
        rep.size > 5000 &&
        !rep.name.includes("FT-M")
    );
    console.log(select3);
    return select3;
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(`Error al solicitar informacion de Github: ${error.message}`);
    } else {
      alert(`Error al solicitar informacion de Github`);
    }
  }
}