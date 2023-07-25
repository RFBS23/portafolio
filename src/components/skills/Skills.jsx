import React from 'react';
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_titulo">HABILIDADES</h2>
            <span className="section_subtitulo">NIVEL TECNICO</span>

            <div className="skills_container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
};

export default Skills;
