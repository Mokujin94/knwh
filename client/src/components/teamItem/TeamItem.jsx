import React from 'react';

import './teamItem.scss';

const TeamItem = ({img, title, descr}) => {
    return (
        <div className='teamItem'>
            <div className="teamItem__block-img">
                <img src={img} alt="img" className="teamItem__img" />
            </div>
            <div className="teamItem__footer">
                <h2 className="teamItem__title">{title}</h2>
                <p className="teamItem__descr">{descr}</p>
            </div>
        </div>
    );
};

export default TeamItem;