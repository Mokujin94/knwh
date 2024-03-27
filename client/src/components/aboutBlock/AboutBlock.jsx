import React from 'react';
import { Link, NavLink } from 'react-router-dom';


import './aboutBlock.scss';

const AboutBlock = ({img, descr, link, translate}) => {
    return (
        <div className='about__item' style={{transform: `translateX(${translate}px)`}}>
            <div className="about__item-top">
                <img src={img} alt="img" className="about__item-img" />
            </div>
            <a target="_blank" href={link} className="about__item-descr">
                {descr}
            </a>
        </div>
    );
};

export default AboutBlock;