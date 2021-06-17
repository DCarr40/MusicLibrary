import React from 'react';


function NavigationBar() {
    return (

    
            
    <body>
        <nav class="navbar background-container fixed-top navbar-expand-lg navbar-light bg-light navbar-style">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand active" href="./index.html">Home</a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="./aboutme.html">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </body>
        
    )
}


export default NavigationBar;