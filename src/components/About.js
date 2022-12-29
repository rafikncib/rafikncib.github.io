import mypic from "../assets/images/mypic.jpg";

const About=()=>{
    return(
        <div id="aboutContent">
            <div className="container pt-5">
                <header className="text-center">
                    <h1 className="black section_title">About <span className="yellow">Me</span></h1>
                    <p className="sansSerifFont">I DESIGN AND CODE BEAUTIFUL THINKS, AND I LOVE WHAT I DO.</p>
                </header>
                <section className="py-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <img src={mypic} alt="" className="personalPic"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <section>
                                <header>
                                    <h2>I'm Rafik Ncib</h2>
                                    <p className="text-capitalize font-italic fw-bold fst-italic">A freelancer.</p>
                                </header>
                                <p className="sansSerifFont">
                                    I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. check out my Portfolio.
                                </p>
                            </section>
                            <hr />
                            <section>
                                <h2>PERSONAL INFO</h2>
                                <div id="info">
                                    <div className="row">
                                        <div className="col">
                                            <p>Name: Rafik Ncib</p>
                                            <p>Age: 27 Years</p>
                                            <p>Nationality: Tunisia</p>
                                            <p>Languages: Arabic, French, English</p>
                                        </div>
                                        <div className="col">
                                            <p>Name: Rafik Ncib</p>
                                            <p>Phone: +216 54-643-238</p>
                                            <p>Email: Info@Example.Com</p>
                                            <p>Freelance: Available</p>
                                        </div>
                                    </div>
                                    <p><a href="RafikNcib_CV.pdf" className="btn boutton">Download CV <span><i class="fas fa-download"></i></span></a></p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;