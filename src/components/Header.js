import logo from '../assets/images/logo.png'
const Header=()=>{;
    return(
        <div id="headerContent" className='shadow-lg fixed-top'>
            <header className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="./"><img src={logo} alt="logo of my portfolio" style={{width:'80px'}}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                    <a className="navbar-brand" href="./"><img src={logo} alt="logo of my portfolio" style={{width:'80px'}}/></a>
                                </h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 offcanvas-body">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#introduceContent">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#aboutContent">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#educExperContent">Experiences</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#worksContent">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contactContent">Contact</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;