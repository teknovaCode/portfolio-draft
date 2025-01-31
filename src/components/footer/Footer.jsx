import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gonzalo</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                    <i class='bx bxl-instagram-alt'></i>
                </a>

                <a href="https://x.com/" className="home__social-icon" target="_blank">
                    <i class='bx bxl-twitter' ></i>
                </a>

                <a href="https://github.com/" className="home__social-icon" target="_blank">
                    <i class='bx bxl-github' ></i>
                </a>
                </div>

                <span className="footer__copy">
                    &#169; Gonzalo Villalba. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;