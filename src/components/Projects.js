import Project from "./Project";

const Projects=()=>{
    return(
        <div id="projectsContent">
            <div className="container">
                <h2>Web developmet</h2>
                <div className="row gy-2">
                    <div className="col-4">
                        <Project />
                    </div>
                    <div className="col-4">
                        <Project />
                    </div>
                    <div className="col-4">
                        <Project />
                    </div>
                    <div className="col-4">
                        <Project />
                    </div>
                    <div className="col-4">
                        <Project />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;