import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Fabrizio Barrios</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">Acerca De</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Proyectos</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://github.com/RFBS23?tab=repositories" className="footer_social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="https://wa.me/51933103242?text=Hola%20XD" className="footer_social-link" target="_blank">
                        <i className="bx bxl-whatsapp"></i>
                    </a>

                    <a href="https://www.instagram.com/fabrizio_barrios18/" className="footer_social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UCj5e_0gp-HSvoJty_Xo52HQ" className="footer_social-link" target="_blank">
                        <i className="bx bxl-youtube"></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; FabriDev. Todos Los Derechos Reservados</span>
            </div>
        </footer>
    )
};

export default Footer;
