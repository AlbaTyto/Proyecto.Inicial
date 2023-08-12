import React from "react";
import p from './Projects.module.css';
import { Flex, Grid } from "@chakra-ui/react";
import { type ProjectInfo } from "./RepoTypes";
import AlbaTyto from "../../assets/InfoJSONs/AlbaTyto.json";
import ProjCard from "./ProjCard";


export default function ProjScroller(): React.JSX.Element {
 
  const reposToRender: ProjectInfo[] = (AlbaTyto);
  const [mainProj, setMainProj] = React.useState<ProjectInfo>(reposToRender[0]);
  
  React.useEffect(()=>{
      setMainProj(reposToRender[0])
  }, [reposToRender])

  return <Flex className={p.wrapper}>
    <div className={p.main}>
      <ProjCard repo={mainProj}/>
    </div>
    <Grid className={p.grid_four_column}>
      {reposToRender.map((e,i)=>{
        return(
          <section key={i} className={p.grid_item}
            onMouseEnter={() => setMainProj(e)}>
            <ProjCard repo={e} 
            key={i}
            />
          </section>
        )
      })}
    </Grid>
  </Flex>;
}
