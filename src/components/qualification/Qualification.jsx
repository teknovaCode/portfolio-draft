import React, { useState } from "react";
import './qualification.css';

const Qualifiaction = () => {

    const[toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return(
        <section className="qualification section">
            <h2 className="section__title">Formación</h2>
            <span className="section__subtitle">Mi trayectoria personal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educación
                    </div>

                    <div 
                        className={toggleState === 2
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experiencia
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={toggleState === 1 
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Escuela Secundaria</h3>
                                <span className="qualification__subtitle">BHM - Salta, Argentina</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 – 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Estudios para Contador Público Nacional</h3>
                                <span className="qualification__subtitle">UNSA - Salta, Argentina</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ingeniería Informática</h3>
                                <span className="qualification__subtitle">UCASAL - Salta, Argentina</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 – Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={toggleState === 2
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content"}
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Asistente Administrativo</h3>
                                <span className="qualification__subtitle">Estudio Jurídico Armando Isasmendi - Salta, Argentina</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 – 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Gestión de Propiedades</h3>
                                <span className="qualification__subtitle">Salta, Argentina</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 – 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Instructor de Programación</h3>
                                <span className="qualification__subtitle">355Code - Online</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualifiaction;