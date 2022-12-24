const Header=()=>{
    return(
        <div id="headerContent">
            <header className="container">
                <nav className="navbar navbar-expand-lg py-2">
                    <div className="container-fluid">
                        <a className="navbar-brand title_size" href="./">Rafik Ncib</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sansSerifFont" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <a className="nav-link active black" aria-current="page" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link black" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#works">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#contact">Contact</a>
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