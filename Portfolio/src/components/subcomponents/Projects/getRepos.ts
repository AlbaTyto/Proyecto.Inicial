import { Repos } from "./RepoTypes";
const gitUser: string | undefined = import.meta.env.VITE_GITHUB_USER;
console.log(gitUser);

const gitToken: string | undefined = import.meta.env.VITE_GITHUB_TOKEN;
console.log(gitToken);

export async function getRepos(): Promise<Repos[]> {
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
    .then((data: Repos[]) => {
      // Aquí puedes trabajar con los datos obtenidos de la API de GitHub
      console.log(data);
      return data;
    });
  //   stargazers_count
  return row_repos.filter((rep) => rep.stargazers_count > 0);
}
