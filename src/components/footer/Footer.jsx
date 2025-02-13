import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Gonzalo</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Sobre mí</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Proyectos</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Servicios</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/gonzalo-emiliano-villalba/" className="home__social-icon" target="_blank">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    

                    <a href="https://x.com/Gonza_villalba8" className="home__social-icon" target="_blank">
                        <i class='bx bxl-twitter' ></i>
                    </a>

                    <a href="https://github.com/gonzavillalba02" className="home__social-icon" target="_blank">
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