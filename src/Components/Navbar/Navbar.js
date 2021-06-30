import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container">
            <div class="nav-bar ">
                <nav class="navbar navbar-expand-lg navbar-light"id="head">
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-3 mt-3">
                          <a class="nav-link" href="#">Get started  </a>
                        </li>
                        <li class="nav-item mr-3 mt-3">
                          <a class="nav-link" href="#about">How it works</a>
                        </li>
                        <li class="nav-item mr-3 mt-3">
                          <a class="nav-link" href="#service">About</a>
                        </li>
                        <li class="nav-item mr-3 mt-3">
                            <a class="nav-link  " href="#projects">Resources</a>
                          </li>
                          
                          <li class="nav-item mt-2">
                            <a class="nav-link " href=""><button class="nav-button">Sign In</button></a>
                          </li>
                      </ul>
                    </div>
                  </nav>
            </div>
            </div>
        </>
    );
};

export default Navbar;