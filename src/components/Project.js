import img from "../assets/images/1.png";
const Project=()=>{
    return(
        <div id="projectContent">
            <div className="project  d-flex align-items-end pointer">
                <img src={img} alt="" className="worksPic"/>
                <div className="container description bg-black rounded-top px-2 py-3 text-center ">
                        <h3 className="yellow">Web Design</h3>
                        <p className="white sansSerifFont">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum!</p>
                        <a href="https://frolicking-selkie-98c32f.netlify.app/" className="btn btn-dark">View Full Project</a>
                </div>
            </div>
        </div>
    )
}

export default Project;