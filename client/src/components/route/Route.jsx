import React from 'react';

import './route.scss';

const Route = ({ title, description, img, style }) => {
    return (
        <div className={"route " + style}>
            <div className="route__container container">
                <div className="route__wrapper">
                    <div className="route__text">
                        <h2 className="route__title">{title}</h2>
                        <p className="route__description">{description}</p>
                    </div>
                    <img className="route__img" src={img} alt="map" />
                </div>
            </div>
        </div>
    )
}

export default Route;