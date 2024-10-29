import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css'

function Navbar() {

    return (
        <>
            <header>
                <nav>
                    <div className="tooltip">
                        <Link to="/">
                            <i className="fa-solid fa-house hover-icon icon"></i>
                        </Link>
                        <span className="tooltiptext">Home</span>
                    </div>
                    <div className="tooltip">
                        <Link to="/projects">
                            <i className="fa-solid fa-folder hover-icon icon"></i>
                        </Link>
                        <span className="tooltiptext">Projects</span>
                    </div>
                    <div className="tooltip">
                        <Link to="/experience">
                            <i className="fa-solid fa-suitcase hover-icon icon"></i>
                        </Link>
                        <span className="tooltiptext">Experience</span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;