import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-book-bookmark about__icon'></i>
                <h3 className="about__title">Educación</h3>
                <span className="about__subtitle">Ingeniería Infromática</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completados</h3>
                <span className="about__subtitle">11+ Proyectos</span>
            </div>

            <div className="about__box">
                <i class='bx bx-package about__icon'></i>
                <h3 className="about__title">Tech Stack</h3>
                <span className="about__subtitle">JS, React, MySQL, TS, Express</span>
            </div>
        </div>
    )
}

export default Info;