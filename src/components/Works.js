import { useState } from "react";
import Projects from "./Projects";

const Works=(props)=>{
    const [buildedProjects,setBuildedProjects]=useState('projects')
    const projectsKeys=Object.keys(props.projects['projects']);

    const handleClick=(name)=>{
        setBuildedProjects(name);
    }
    return(
        <div id="worksContent" className="pt-5">
            <div className="container pt-5">
                <header className="text-center">
                    <h1 className="black section_title">My <span className="yellow">PORTFOLIO</span></h1>
                    <p className="sansSerifFont">MY SOME RECENT WORK WITH FULL DETAILS</p>
                    <div className="hstack gap-3 justify-content-center">
                        <button type="button" className={`btn ${buildedProjects!=='projects'?'bg-black':' btn-danger'}`} onClick={()=>handleClick("projects")} id="all">ALL</button>
                        <button type="button" className={`btn ${buildedProjects!=='web_dev'?'bg-black':' btn-danger'}`} onClick={()=>handleClick("web_dev")}>Web developmet</button>
                        <button type="button" className={`btn ${buildedProjects!=='reactJs'?'bg-black':' btn-danger'}`} onClick={()=>handleClick("reactJs")}>reactJs</button>
                        <button type="button" className={`btn ${buildedProjects!=='python'?'bg-black':' btn-danger'}`} onClick={()=>handleClick("python")}>python</button>
                    </div>
                </header>
                {
                    buildedProjects==='projects'? projectsKeys.map((elem,key)=>{
                        return(<Projects projects={props.projects['projects'][elem]} key={key} title={elem}/>)
                    })
                    :<Projects projects={props.projects['projects'][buildedProjects]}/>
                }    
            </div>
        </div>
    )
}

export default Works;