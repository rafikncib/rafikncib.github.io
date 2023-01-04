import img from "../assets/images/1.png";
const Project=(props)=>{
    console.log("project",props.project);
    let image = require('../assets/images/'+props.project['image']);

    return(
        <div id="projectContent">
            <div className="project  d-flex align-items-end pointer border border-4 shadow-lg">
                <img src={image} alt="" className="worksPic"/>
                <div className="container description bg-black rounded-top px-2 py-3 text-center ">
                        <h3 className="yellow">{props.project['title']}</h3>
                        <p className="white sansSerifFont">{props.project['description']}</p>
                        <a href={props.project['url']} className="btn btn-dark">View Full Project</a>
                </div>
            </div>
        </div>
    )
}

export default Project;