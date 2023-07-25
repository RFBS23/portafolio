import React, {useState} from 'react';
import "./calificacion.css";

const Calificacion = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="calificacion section">
            <h2 className="section_titulo">CALIFICACIONES</h2>
            <span className="section_subtitulo">MI CALIFICACION PERSONAL</span>

            <div className="calificacion_container container">
                <div className="calificacion_tabs">
                    <div className={toggleState === 1 ? "calificacion_button calificacion_active button--flex" : "calificacion_button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap calificacion_icon"></i>
                        Educacion
                    </div>

                    <div className={toggleState === 2 ? "calificacion_button calificacion_active button--flex" : "calificacion_button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt calificacion_icon"></i>
                        Experiencia
                    </div>
                </div>

                <div className="calificacion_sections">

                    <div className={toggleState === 1 ? "calificacion_content calificacion_content-active" : "calificacion_content"}>

                        <div className="calificacion_data">
                            <div>
                                <h3 className="calificacion_title">titulo 1</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>
                        </div>

                        <div className="calificacion_data">
                            <div></div>
                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>

                            <div>
                                <h3 className="calificacion_title">titulo 2</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="calificacion_data">
                            <div>
                                <h3 className="calificacion_title">titulo 3</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>
                        </div>

                        <div className="calificacion_data">
                            <div></div>

                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>

                            <div>
                                <h3 className="calificacion_title">titulo 4</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "calificacion_content calificacion_content-active" : "calificacion_content"}>

                        <div className="calificacion_data">
                            <div>
                                <h3 className="calificacion_title">titulo 5</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>
                        </div>

                        <div className="calificacion_data">
                            <div></div>
                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>

                            <div>
                                <h3 className="calificacion_title">titulo 6</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="calificacion_data">
                            <div>
                                <h3 className="calificacion_title">titulo 7</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>
                        </div>

                        <div className="calificacion_data">
                            <div></div>
                            <div>
                                <span className="calificacion_rounder"></span>
                                <span className="calificacion_line"></span>
                            </div>

                            <div>
                                <h3 className="calificacion_title">titulo 8</h3>
                                <span className="calificacion_subtitle">esperienci - unisa</span>
                                <div className="calificacion_calender">
                                    <i className="uil uil-calendar-alt"></i> &nbsp;
                                    2021 - Present
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
};

export default Calificacion;
