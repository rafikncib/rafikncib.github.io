import logo from '../assets/images/logo.png'
const Header=()=>{;
    return(
        <div id="headerContent" className='fixed-top shadow-lg'>
            <header className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="./"><img src={logo} alt="logo of my portfolio" style={{width:'80px'}}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sansSerifFont" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
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