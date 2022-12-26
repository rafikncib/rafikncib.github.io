const Skills=()=>{
    return(
        <div id="skills" className="info p-5 mt-3">
            <div className="container">
                <div className="row">
                    <h2 className="bg-gray shadow-lg py-2"><span>Skills</span></h2>
                </div>
                <div className="row bg-gray shadow-lg py-2">
                    <div className="col d-grid gap-3">
                        <div className="skill  ">
                            <div className="skillName">
                                <span>HTML</span>
                            </div>
                            <div className="progress ">
                                <div className="progress-bar bg-black " role="progressbar" aria-label="Basic example" style={{width: "85%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">
                                <span>CSS</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-black" role="progressbar" aria-label="Basic example" style={{width: "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">
                                <span>JAVASCRIPT</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-black" role="progressbar" aria-label="Basic example" style={{width: "72%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">72%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">
                                <span>PHP</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-black" role="progressbar" aria-label="Basic example" style={{width: "67%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">67%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skillName">
                                <span>REACT</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-black" role="progressbar" aria-label="Basic example" style={{width: "60%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">60%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;