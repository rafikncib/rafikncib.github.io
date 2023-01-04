import Project from "./Project";

const Projects=(props)=>{
    console.log("projects",props.projects);

    return(
        <div id="projectsContent">
            <div className="container">
                <h2>Web developmet</h2>
                <div className="row gy-2">
                    {
                        props.projects.web_dev.map((elem,key)=>{
                            return (
                                <div className="col-12 col-md-4" key={key}>
                                    <Project project={elem}/>
                                </div> 
                            )
                        })
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default Projects;