import React from 'react';

import './burgerMenu.scss';

const BurgerMenu = ({onClick}) => {
    return (
        <div onClick={onClick} className='burgerMenu'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default BurgerMenu;