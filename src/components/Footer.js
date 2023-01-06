const Footer=()=>{
    return(
        <div id="footerContent" >
            <div className="container text-center pt-5">
                <div id="contacts-link">
                    <ul className="nav justify-content-center ">
                        <li className="nav-item pb-2 animated fadedInLeft " ><a href="https://www.facebook.com/rafik.ncib.54" className="nav-link text-white border btn bg-black"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li className="nav-item pb-2"><a href="https://github.com/rafikncib" className="nav-link text-white border btn bg-black"><i className="fab fa-github"></i> GitHub</a></li>
                        <li className="nav-item pb-2"><a href="https://www.linkedin.com/in/rafik-ncib-b3b666173/" className="nav-link text-white border btn bg-black"><i className="fab fa-linkedin-in"></i> Linkedin</a></li>
                    </ul>
                </div>
            <p>Copyright © 2022| Design By <a href="https://www.linkedin.com/in/rafik-ncib-b3b666173/">Rafik Ncib</a>.</p>
            </div>
        </div>
    )
}

export default Footer;