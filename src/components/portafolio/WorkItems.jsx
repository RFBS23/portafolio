import React, {useState} from 'react';

const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div>
            <div className="work_card" key={item.id}>
                <img src={item.image} alt="" className="work_img"/>
                <h3 className="work_title">{item.title}</h3>
                <span className="work_button" onClick={() => toggleTab(1)}>Ver mas <i className='bx bx-chevron-right work_button-icon'></i> </span>
            </div>

            <div className={toggleState === 1 ? "portafolio_modal active-modal" : "portafolio_modal"}>
                <div className="portafolio_modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times portafolio_modal-close"></i>
                    <h3 className="portafolio_modal-title">{item.title}</h3>
                    <p className="portafolio_modal-description">{item.subtitulo}</p>

                    <ul className="portafolio_modal-services grid">
                        <img src={item.imgmodal} alt="" className="work_img"/>
                        <li className="portafolio_modal-portfolio">
                            <i className="uil uil-check-circle portafolio_modal-icon"></i>
                            <p className="portafolio_modal-info">{item.descripcion}</p>
                        </li>
                        <li className="portafolio_modal-portfolio">
                            <i className="uil uil-check-circle portafolio_modal-icon"></i>
                            <p className="portafolio_modal-info">{item.viñeta1}</p>
                        </li>

                        <li className="portafolio_modal-portfolio">
                            <i className="uil uil-check-circle portafolio_modal-icon"></i>
                            <a href={item.link} className="portafolio_modal-link" target="_blank">ver Web</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default WorkItems;
