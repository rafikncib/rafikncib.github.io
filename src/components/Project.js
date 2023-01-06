const Project=(props)=>{
    //declaration
    let image="";
    try{
        image = require("./../assets/images/"+props.project['image']);
    }catch(err){
        console.log('No image found',err.message);
    }
    console.log(props.project);

    return(
        <div id="projectContent">
            <div className="project  d-flex align-items-end pointer border border-4 shadow-lg">
                <img src={image} alt={`project ${props.project['title']}`} className="worksPic"/>
                <div className="container description bg-black rounded-top px-2 py-3 text-center ">
                        <h3 className="yellow text-capitalize">{props.project['title']}</h3>
                        <p className="white sansSerifFont">{props.project['description']}</p>
                        <a href={props.project['url']} className="btn btn-dark">View Full Project</a>
                </div>
            </div>
        </div>
    )
}

export default Project;