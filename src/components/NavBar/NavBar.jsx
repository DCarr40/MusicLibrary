import React from 'react';
import "./NavBar.css";

function NavigationBar() {
    return (
      
   
        <nav className="navbar navbar-style fixed-top navbar-expand-lg navbar-light bg-light navbar-style">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand active" href="./index.html">Home</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="./aboutme.html">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        
    )
}


export default NavigationBar;