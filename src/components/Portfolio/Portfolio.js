import React from 'react';
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import covid from '../../img/Screenshot from 2020-05-21 21-20-56.png'
import food from '../../img/Screenshot from 2020-05-21 21-23-13.png'
import apod from '../../img/Screenshot from 2020-05-21 21-25-33.png'
import { GitHub } from '@material-ui/icons';
const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio-title">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-img-top">
                                <img src={covid} alt=""/>
                            </div>
                            <div className="card-body">
                            <div className="card-title">
                                <h3><a href="https://covid-19-live-tracker.netlify.app" target="_blank">Covid-19 Tracker</a></h3>
                            </div>
                            <div className="card-text">
                                <p>It's a web application for COVID-19. It always shows you the current number of infected, death, and recovered from COVID-19.</p>
                            </div>
                            <a className="card-link " href="https://github.com/Jahidfahad/covid-19-tracker"><GitHub style={{color:"#ddd"}}></GitHub></a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                            <div className="card-img-top">
                                <img src={food} alt=""/>
                            </div>
                            <div className="card-body">
                            <div className="card-title">
                                <h3><a href="https://food-jif.netlify.app" target="_blank">Food recipe app</a></h3>
                            </div>
                            <div className="card-text">
                                <p>It's a simple food recipe app. you can search there for your favourite food item. Over 70,000+ recipe is there.</p>
                            </div>
                            <a className="card-link " href="https://github.com/Jahidfahad/food"><GitHub style={{color:"#ddd"}}></GitHub></a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                            <div className="card-img-top">
                                <img src={apod} alt=""/>
                            </div>
                            <div className="card-body">
                            <div className="card-title">
                                <h3><a href="https://astropod.netlify.app" target="_blank">Astronomy picture of the day</a></h3>
                            </div>
                            <div className="card-text">
                                <p>It's a simple web app that shows you every day a new photo from NASA that called Astronomy picture of the day.</p>
                            </div>
                            <a className="card-link " href="https://github.com/Jahidfahad/apod" target="_blank"><GitHub style={{color:"#ddd"}}></GitHub></a>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;