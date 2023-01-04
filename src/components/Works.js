import Projects from "./Projects";

const Works=(props)=>{
    return(
        <div id="worksContent" className="pt-5">
            <div className="container pt-5">
                <header className="text-center">
                    <h1 className="black section_title">My <span className="yellow">PORTFOLIO</span></h1>
                    <p className="sansSerifFont">MY SOME RECENT WORK WITH FULL DETAILS</p>
                    <div className="hstack gap-3 justify-content-center">
                        <button type="button" className="btn btn-dark">ALL</button>
                        <button type="button" className="btn btn-dark">Web developmet</button>
                        <button type="button" className="btn btn-dark">Experience</button>
                    </div>
                </header>
                <Projects projects={props.projects}/>
            </div>
        </div>
    )
}

export default Works;