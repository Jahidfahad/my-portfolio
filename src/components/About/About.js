import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import aboutImg from '../../img/0.jpeg'
import './About.css'

const About = () => {
    return (
        <div className="about" id="about">

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-title">
                            <h2>About me</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="about-details">
                            <p>Hello! I am Md Jahidul Islam Fahad. I am a Full Stack Web Developer. I develop web application. My main skills are based on javascript. I love to work with javascript. I am currently pursuing my bachelor's degree at Brahmanbaria Govt College(Bangladesh). I am ready to work based on my skills so anytime you can contact with me to work with me.</p>
                            <button className="btn btn-outline-success">Get Resume</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about-img">
                            <img src={aboutImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;