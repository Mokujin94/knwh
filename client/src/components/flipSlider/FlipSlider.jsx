import React from 'react';

import './flipSlider.scss';

import arrow from './icons/arrow.svg';

const FlipSlider = ({onClickRight, onClickLeft, translate, number25, number50, number75, number100, style}) => {


    return (
        <div className={`flip__wrapper ${style}`}>
            <div className={translate == number25 ? "flip__progress flip__progress-25" : Math.floor(translate) == number50 ? "flip__progress flip__progress-50" : Math.floor(translate) == number75 ? "flip__progress flip__progress-75" : Math.floor(translate) == number100 ? 'flip__progress flip__progress-100' : false}></div>
            <div className="flip__control">
                <button className="flip__control-item" onClick={onClickRight}>
                    <img src={arrow} alt="arrow-left" className="flip__control-left" />
                </button>
                <button className="flip__control-item" onClick={onClickLeft}>
                    <img src={arrow} alt="arrow-right" className="flip__control-right" />
                </button>
            </div>
        </div>
    );
};

export default FlipSlider;