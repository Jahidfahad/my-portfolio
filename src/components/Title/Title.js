import React from 'react';
import './Title.css';
import titleImg from '../../img/Fahad_new_1-removebg-preview.png'
import Typical from 'react-typical'

const Title = () => {
    return (
        <div className="title">
            <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="title-main">
                                    <p>Hello i'am</p>
                                    <h1>Jahid Fahad</h1>
                                    <h4>
                                        <Typical
                                        loop={Infinity}
                                        wrapper="b"
                                        steps={[
                                            'Frontend Developer',
                                            1000,
                                            'Backend Developer',
                                            1000
                                        ]}

                                    />
                                    </h4>
                                    
                                    <button type="button" className="title-button btn btn-outline-success">Get Resume</button>
                                    <button type="button" className="title-button btn btn-outline-success"><a href="#contact">Contact</a></button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="title-img">
                                    <img src={titleImg} alt=""/>
                                </div>
                            </div>
                        </div>

            </div>
        </div>
    );
};

export default Title;
