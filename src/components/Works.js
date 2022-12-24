import Projects from "./Projects";

const Works=()=>{
    return(
        <div id="worksContent">
            <div className="container pt-5">
                <header className="text-center">
                    <h1 className="black section_title">My <span className="yellow">PORTFOLIO</span></h1>
                    <p className="sansSerifFont">MY SOME RECENT WORK WITH FULL DETAILS</p>
                    <div class="hstack gap-3 justify-content-center">
                        <button type="button" class="btn btn-dark">ALL</button>
                        <button type="button" class="btn btn-dark">Web developmet</button>
                        <button type="button" class="btn btn-dark">Experience</button>
                    </div>
                </header>
                <Projects />
            </div>
        </div>
    )
}

export default Works;