import React from 'react';

import './servicesPageBlock.scss';

const ServicesPageBlock = ({icon, title, descr}) => {
    return (
        <div className='servicesPageBlock'>
            <div className="servicesPageBlock__img">
                <img src={icon} alt="" className="servicesPageBlock__icon" />
            </div>
            <div className="servicesPageBlock__right">
                <h2 className="servicesPageBlock__title">{title}</h2>
                <p className="servicesPageBlock__descr">{descr}</p>
            </div>
        </div>
    );
};

export default ServicesPageBlock;