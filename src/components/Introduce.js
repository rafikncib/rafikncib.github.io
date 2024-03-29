import mypic from "../assets/images/mypic.jpg";
import file from "../assets/pdf/rafikWebDeveloppeur_2.pdf";
const Introduce=()=>{
    return(
        <div id="introduceContent" className="pt-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center ">
                        <section className="mb-3 text-center text-md-start">
                            <h1 className="heading ">Hello, I am Rafik Ncib</h1>
                            <h2 className=" fst-italic" id="jobs" >Web developer</h2>
                            <p className="gray sansSerifFont">I am Rafik Ncib. I am 27 years old.I am from Tunisia. I am a frontend developer with a master's degree in Computer Engineering and five years of software development experience.</p>
                            <a href={file} className="btn bg-black" target="_blank" rel="noreferrer" title="Rafik portfolio">Download CV <span><i className="fas fa-download"></i></span></a>
                        </section>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={mypic} alt="Rafik Ncib" className="personalPic rounded-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;