import React, {useState} from 'react';
import './header.css';
const Header = () => {
    /*menu alterno*/
    const[Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="https://www.youtube.com/channel/UCj5e_0gp-HSvoJty_Xo52HQ" className="nav_logo" target="_blank">Fabrizio</a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">

                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <i className="uil uil-estate nav_icon"></i>
                                Inicio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>
                                Acerca de
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Habilidades
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>
                                Servicios
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#portafolio" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Portafolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
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