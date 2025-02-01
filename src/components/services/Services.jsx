import React, { useState } from "react";
import "./services.css";

const Services = () => {

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Full-Stack <br/> Web Development
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i class='bx bx-right-arrow-alt services__button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Full-Stack Web Development</h3>
                            <p className="services__modal-description">I develop custom web applications from backend to frontend, building complete systems with modern technologies tailored to your needs.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Custom development of full-stack web systems.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Building applications with modern technologies like Node.js, React, and relational databases.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Integration of admin modules to manage the platform easily.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implementation of custom features.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Performance optimization, ensuring the website is fast and scalable.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                        Front-End <br /> Redesign
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <i class='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Front-End Redesign</h3>
                            <p className="services__modal-description">I code the front-end of your website to make it responsive, dynamic, and user-friendly, ensuring an intuitive user experience.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Responsive and mobile-friendly layouts.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Dynamic interactions using modern JS frameworks like React.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimized performance for faster load times.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Clean, maintainable code for future updates.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i class='bx bx-coin-stack services__icon'></i>
                        <h3 className="services__title">Back-End <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i class='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Back-End Development</h3>
                            <p className="services__modal-description">I build the backend of your website, ensuring functionality, data storage, and smooth communication between the frontend and the server.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Building APIs and server-side logic.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Database design and integration.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">User authentication and authorization.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Ensuring data security and reliable functionality.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;