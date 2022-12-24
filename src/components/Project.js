import img from "../assets/images/1.png";
const Project=()=>{
    return(
        <div id="projectContent">
            <div className="project  d-flex align-items-end pointer">
                <img src={img} alt="" className="worksPic"/>
                <div className="container description bg-success rounded-top p-2 text-center ">
                        <h3 className="text-light">Web Design</h3>
                        <p className="text-white sansSerifFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum!</p>
                        <a href="#" className="btn btn-dark">View Full Project</a>
                </div>
            </div>
        </div>
    )
}

export default Project;