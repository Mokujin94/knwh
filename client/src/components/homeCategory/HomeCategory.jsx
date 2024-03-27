import React from 'react';
import { Link } from 'react-router-dom';

import './homeCategory.scss';

const HomeCategory = ({path, img, title, descr,}) => {
    return (
        <Link to={path} className="category__item">
            <img src={img} alt={img} className="category__img" />
            <div className="category__text">
                <h2 className="category__text-title">{title}</h2>
                <p className="category__text-descr">{descr}</p>
            </div>
        </Link>
    );
};

export default HomeCategory;