import Project from "./Project";

const Projects=(props)=>{
    return(
        <div id="projectsContent">
            <div className="container pt-3">
                <div className="row gy-2 animate__animated animate__fadeInRight">
                    {
                        props.projects?.map((elem,key)=>{
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