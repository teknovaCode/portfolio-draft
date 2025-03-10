import React, { useState } from "react";
import "./services.css";

const Services = () => {

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Lo que ofrecemos</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">
                            Desarrollo Web <br/> Full-Stack
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver más
                        <i class='bx bx-right-arrow-alt services__button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Desarrollo Web Full-Stack</h3>
                            <p className="services__modal-description">Desarrollamos aplicaciones web personalizadas desde el backend hasta el frontend, creando sistemas completos con tecnologías modernas adaptadas a tus necesidades.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo personalizado de sistemas web full-stack.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creación de aplicaciones con tecnologías modernas como Node.js, React y bases de datos relacionales.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Integración de módulos administrativos para gestionar la plataforma fácilmente.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implementación de características personalizadas.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimización del rendimiento, asegurando que el sitio web sea rápido y escalable.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">
                        Rediseño <br /> Front-End
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Ver más <i class='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Rediseño Front-End</h3>
                            <p className="services__modal-description">Programamos el front-end de tu sitio web para hacerlo responsivo, dinámico y fácil de usar, asegurando una experiencia de usuario intuitiva.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño de interfaces responsivas y adaptadas a dispositivos móviles.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Interacciones dinámicas utilizando frameworks modernos de JavaScript como React.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimización del rendimiento para tiempos de carga más rápidos.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Código limpio y mantenible para futuras actualizaciones.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i class='bx bx-coin-stack services__icon'></i>
                        <h3 className="services__title">Desarrollo <br /> Back-End</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>Ver más <i class='bx bx-right-arrow-alt services__button-icon'></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

                            <h3 className="services__modal-title">Desarrollo Back-End</h3>
                            <p className="services__modal-description">Construimos el backend de tu sitio web, asegurando la funcionalidad, almacenamiento de datos y una comunicación fluida entre el frontend y el servidor</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creación de APIs y lógica del lado del servidor.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño e integración de bases de datos.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Autenticación y autorización de usuarios.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Aseguramiento de la seguridad de los datos y funcionalidad confiable.</p>
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