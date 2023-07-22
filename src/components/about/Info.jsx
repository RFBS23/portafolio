import React from 'react';

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                <i className='bx bxs-award about_icon'></i>
                <h3 className="about_title">Experiencia</h3>
                <span className="about_subtitle">2 Años de Practicas</span>
            </div>

            <div className="about_box">
                <i className='bx bxs-briefcase-alt-2 about_icon'></i>
                <h3 className="about_title">Completado</h3>
                <span className="about_subtitle">23 + Proyectos</span>
            </div>

            <div className="about_box">
                <i className='bx bx-support about_icon'></i>
                <h3 className="about_title">Apoyo</h3>
                <span className="about_subtitle">Online 24/7</span>
            </div>
        </div>
    )
};

export default Info;
