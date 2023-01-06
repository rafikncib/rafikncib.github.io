import mypic from "../assets/images/mypic.jpg";
import file from "../assets/pdf/rafikWebDeveloppeur_2.pdf";

const About=()=>{
    return(
        <div id="aboutContent" className=" pt-5">
            <div className="container pt-5">
                <header className="text-center">
                    <h1 className="black section_title">About <span className="yellow">Me</span></h1>
                    <p className="sansSerifFont">I DESIGN AND CODE BEAUTIFUL THINKS, AND I LOVE WHAT I DO.</p>
                </header>
                <section className="py-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3">
                            <img src={mypic} alt="Rafik Ncib" className="personalPic"/>
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
                                            <p>Email: rafikncib@gmail.com</p>
                                            <p>Email: ncibrafik@gmail.com</p>
                                            <p>Freelance: Available</p>
                                        </div>
                                    </div>
                                    <p><a href={file} className="btn bg-black" target="_blank" rel="noreferrer" title="Rafik portfolio">Download CV <span><i className="fas fa-download"></i></span></a></p>
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