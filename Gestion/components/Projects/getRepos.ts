import { Filter } from "./RepoTypes";

//get user and token from env:
/* 
const gitUser: string | undefined = import.meta.env.VITE_GITHUB_USER; //no need to import user
const gitToken: string | undefined = import.meta.env.VITE_GITHUB_TOKEN;
*/ 
const gitToken: string= ''; //just to skip error

export async function getRepos(): Promise<Filter[] | undefined> {
  try {

    // Get repo info from github:
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
        return data;
      });
      
    //   Filter some repos:
    const selected = row_repos.filter(
      (rep) =>
        rep.stargazers_count > 0 &&
        rep.updated_at.includes("2023") &&
        rep.size > 5000 &&
        !rep.name.includes("FT-M")
    );
    return selected;
  } catch (error: unknown) {
    if (error instanceof Error) {
      alert(`Error al solicitar informacion de Github: ${error.message}`);
    } else {
      alert(`Error al solicitar informacion de Github`);
    }
  }
}

//Code below was attended to be used getting info directly from github API at te beggining of the project
/* // const [reposToRender, setRepoTR] = React.useState<Filter[]>([
  //   ...AlbaTyto
  // ]);
  // React.useEffect(() => {
  //   if(reposToRender[0].owner.login === 'JSON'){
  //     getRepos()
  //     .then((response) => console.log(response))
      // .then((data: Filter[]) => data?.length > 0 ?
      //  setRepoTR(data) : 
      //  window.alert("Projects couldn't be loaded"))
  //   }
  // }, [reposToRender]); */