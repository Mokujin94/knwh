import React, { useState } from 'react';


import './filterRooms.scss';

import arrow from '../../ui/icons/sliderBlack/nextIcon.svg';
const FilterRooms = ({onClick, option, style}) => {

    const [name, setName] = useState('Все');
    const [open, setOpen] = useState(false);


    const clickOption = (name, i) => {
        setName(name);
        setOpen(false);
        onClick(name);
    }
    const options = option.map(({name}, i) => {
        return (
            <li className="filter-rooms__item" key={i} onClick={() => clickOption(name)}>{name}</li>
        )
    })


    return (
        <div className={`filter-rooms__wrapper ${style}`} >
            <div className="filter-rooms__header" onClick={() => setOpen(open => !open)}>
                <h2 className="filter-rooms__name">{name}</h2>
                <img src={arrow} alt="icon" className="filter-rooms__img" />
            </div>
            <ul className="filter-rooms" style={open ? {display: 'block'} : {display: 'none'}}>
                {options}
            </ul>
        </div>
    );
};

export default FilterRooms;