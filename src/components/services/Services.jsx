import React, {useState} from 'react';
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services section" id="services">
            <h2 className="section_titulo">Servicios</h2>
            <span className="section_subtitulo">LO QUE OFREZCO</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Diseño de producto</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>Ver Mas <i className="uil uil-angle-right services_button-icon"></i> </span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">titulo de prueba1</h3>
                            <p className="services_modal-description">Servicios con mas de 1 año y medio de experiencia. Proporcionando trabajos de calidad para clientes y uso propio.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Diseño Ux</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(2)}>Ver Mas <i className="uil uil-angle-right services_button-icon"></i> </span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">titulo de prueba2</h3>
                            <p className="services_modal-description">Servicios con mas de 1 año y medio de experiencia. Proporcionando trabajos de calidad para clientes y uso propio.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">Diseño visual</h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(3)}>Ver Mas <i className="uil uil-angle-right services_button-icon"></i> </span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                            <h3 className="services_modal-title">titulo de prueba</h3>
                            <p className="services_modal-description">Servicios con mas de 1 año y medio de experiencia. Proporcionando trabajos de calidad para clientes y uso propio.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">Desarrollo de Experiencia de Usuario</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;
