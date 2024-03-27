import React from 'react';

import './servicesBlock.scss';


const ServicesBlock = ({icon, title, translate}) => {
    return (
        <div className='services__item' style={{transform: `translateX(${translate}px)`}}>
            <div className="services__item-top">
                <img src={icon} alt="clock" className="services__icon" />
            </div>
            <div className="services__item-bottom">
                <h2 className="services__item-title">{title}</h2>
            </div>
        </div>
    );
};

export default ServicesBlock;