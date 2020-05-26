import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/Untitled-1.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header" id="header">
            

            <div className="container">


                         <nav class="navbar navbar-expand-lg navbar-light sticky-top">
                        <a className="navbar-brand" href="#header"><img className="logo" src={logo} alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item nav-item-color">
                                <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item nav-item-color">
                                <a className="nav-link" href="#skill">Skill</a>
                            </li>
                            <li className="nav-item nav-item-color">
                                <a className="nav-link" href="#portfolio">Porfolio</a>
                            </li>
                            <li className="nav-item nav-item-color">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            </ul>
                        </div>
                        </nav>


            </div>


        </div>
    );
};

export default Header;