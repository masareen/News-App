
import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {


    return (
        <div>
            {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"> */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: '#34bdeb' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News All</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <Link className="nav-link " aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"> <Link className="nav-link " to="/business">Business</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link " to="/entertainment">Entertainment</Link> </li>
                            <li className="nav-item"> <Link className="nav-link " to="/general"> General</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link " to="/health">  Health</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link " to="/science"> Science</Link>   </li>
                            <li className="nav-item"> <Link className="nav-link " to="/sports">  Sports</Link>  </li>
                            <li className="nav-item"> <Link className="nav-link " to="/technology">Technology</Link> </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle dropdown-menu-end" to="/" data-bs-toggle="dropdown" >
                                    Country
                                </Link>
                                <ul className="dropdown-menu" id="country">
                                    <li><Link className="dropdown-item" to="/" value="in">India</Link></li>
                                    <li><Link className="dropdown-item" to="/" value="ca"> Canada</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar