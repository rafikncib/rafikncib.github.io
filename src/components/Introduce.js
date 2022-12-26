import mypic from "../assets/images/mypic.jpg";
const Introduce=()=>{
    return(
        <div id="introduceContent">
            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-7">
                        <section>
                            <h1 className="heading">Hello, I am Rafik Ncib</h1>
                            <h2 className="heading" id="jobs" >Web designer</h2>
                            <p className="gray sansSerifFont">I am Rafik Ncib. I am a Freelancer.I am Rafik Ncib. I am a Freelancer.I am Rafik Ncib. I am a Freelancer.I am Rafik Ncib. I am a Freelancer.I am Rafik Ncib. I am a Freelancer.</p>
                            <a href="RafikNcib_CV.pdf" className="btn">Download CV <span><i class="fas fa-download"></i></span></a>
                        </section>
                    </div>
                    <div className="col-5">
                        <img src={mypic} alt="" className="personalPic rounded-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce;