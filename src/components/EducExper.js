import Education from "./Education";

const EducExper=()=>{
    return(
        <div id="educExperContent">
            <div className="container pt-5 pb-4">
                <header className="text-center">
                    <h1 className="black section_title">EDUCATION & <span className="yellow">EXPERIENCES</span></h1>
                    <p className="sansSerifFont">IT IS A LONG ESTABLISHED FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.</p>
                    <div class="hstack gap-3 justify-content-center">
                        <button type="button" class="btn ">Education</button>
                        <button type="button" class="btn">Skills</button>
                        <button type="button" class="btn">Experience</button>
                    </div>
                </header>
                    <Education />
            </div>
        </div>
    )
}

export default EducExper;