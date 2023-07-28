import React, {useState} from 'react';
import './header.css';
const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        /*a 560 se visualizara el boton scroll*/
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /*menu alterno*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">Fabrizio</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">

                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-estate nav_icon"></i>
                                Inicio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-user nav_icon"></i>
                                Acerca de
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-file-alt nav_icon"></i>
                                Habilidades
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-briefcase-alt nav_icon"></i>
                                Servicios
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portafolio" onClick={() => setActiveNav('#portafolio')} className={activeNav === "#portafolio" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-scenery nav_icon"></i>
                                Portafolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#experiencia" onClick={() => setActiveNav('#portafolio')} className={activeNav === "#portafolio" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-scenery nav_icon"></i>
                                Experiencia
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav_link active_link" : "nav_link"}>
                                <i className="uil uil-message nav_icon"></i>
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" onClick={()=> showMenu(!Toggle)}></i>
                </div>
                <nav className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </nav>
            </nav>
        </header>
    )
}

export default Header