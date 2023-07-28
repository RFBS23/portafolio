import React from 'react';
import "./portafolio.css";
import Trabajos from "./Trabajos";

const Portafolio = () => {
    return (
        <section className="work section" id='portafolio'>
            <h2 className="section_titulo">PORTAFOLIO</h2>
            <span className="section_subtitulo">MIS TRABAJOS MAS RECIENTES Y ANTIGUOS</span>
            <Trabajos />
        </section>
    )
};

Portafolio.propTypes = {};

export default Portafolio;
