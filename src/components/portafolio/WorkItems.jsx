import React from 'react';

const WorkItems = ({item}) => {
    return (
        <div>
            <div className="work_card" key={item.id}>
                <img src={item.image} alt="" className="work_img"/>
                <h3 className="work_title">{item.title}</h3>
                <a href="" className="work_button">Ver mas <i className='bx bx-chevron-right work_button-icon'></i> </a>
            </div>
        </div>

    )
};

export default WorkItems;
