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
                </div>
            </div>
        </nav>
    
        
    )
}


export default NavigationBar;