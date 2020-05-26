import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {GitHub, Facebook, LinkedIn, Twitter } from '@material-ui/icons';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-title">
                            <h2>Contact</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-option">
                            <h4>Email: freelancerjifahad@gmail.com</h4>
                            <h4>Email: jahidfahad017@gmail.com</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-option">
                            <h4>Phone: +8801778872401</h4>
                            <h4>Phone: +8801701028551</h4>
                        </div>
                    </div>
                        <div className="social-option">
                            <div className="row">
                                <div className="col-sm-3">
                                    <a href="https://github.com/Jahidfahad" target="_blank"><GitHub  style={{color:"white", width:"50px", height:"50px", marginBottom:"15px"}}></GitHub></a>
                                </div>
                                <div className="col-sm-3">
                                    <a href="https://www.linkedin.com/in/jif/" target="_blank"><LinkedIn  style={{color:"white", width:"50px", height:"50px", marginBottom:"15px"}}></LinkedIn></a>
                                </div>
                                <div className="col-sm-3">
                                   <a href="https://web.facebook.com/jif.Fahad" target="_blank"> <Facebook  style={{color:"white", width:"50px", height:"50px", marginBottom:"15px"}}></Facebook></a>
                                </div>
                                <div className="col-sm-3">
                                    <a href="https://twitter.com/md_jahidfahad" target="_blank"><Twitter  style={{color:"white", width:"50px", height:"50px", marginBottom:"15px"}}></Twitter></a>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;