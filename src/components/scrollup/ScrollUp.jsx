import React from 'react';
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        /*a 560 se visualizara el boton scroll*/
        if (this.scrollY >= 560) scrollUp.classList.add("show_scroll");
        else scrollUp.classList.remove("show_scroll");
    })
    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup_icon"></i>
        </a>
    )
};

export default ScrollUp;
