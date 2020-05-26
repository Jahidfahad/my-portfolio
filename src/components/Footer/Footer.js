import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Footer.css'
const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer" id="footer">
            <p>Copyright &copy; Jahid Fahad {year}</p>
        </div>
    );
};

export default Footer;