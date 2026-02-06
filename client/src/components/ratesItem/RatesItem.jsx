import React from 'react';
import { useState } from 'react';
import './ratesItem.scss';
import arrow from '../../ui/icons/arrow.svg';
import action from '../../ui/action.png';

const RatesItem = ({ tariff, setForm, setActiveMail, setDefaultRate, setActiveRate }) => {

    const [activeCategories, setActiveCategories] = useState(0);

    
    let setList = tariff.categories[activeCategories].list.map((listItem, i) => {
        return (
            <div className="tarif__list-wrapper">
                <img src={arrow} className="tarif__list-marker" />
                <li className="tarif__list-item" key={i}>{listItem.title}</li>
            </div>
        );
    });

    const setPrice = (category) => {
        if(category.price) {
            return (
                <div className="tarif__price">
                    {category.priceBeforeSale ? <p className="tarif__price-number tarif__price-number_before">{category.priceBeforeSale}</p> : ""}
                    <p className="tarif__price-number">{category.price}</p>
                </div>
            );
        }
    }

    const setHint = (category) => {
        return (
            <p className="tarif__hint">{category.hint ? category.hint : false}</p>
        );
    }

    const setLabel = (category) => {
        let labelText = tariff.label ? tariff.label : "";
        labelText = category.label ? category.label : labelText;

        if(labelText) {
            return(
                <div className="rates__item-sticker">{labelText}</div>
            );
        }
    }

    const setOrderBtn = (category) => {
        if(category.isPay && category.href) {
            return(
                <a href='javascript:void(0)' onClick={() => (eval(category.href))} className="tarif__pay-button">Купить</a>
            );
        } else {
            return (
                <div onClick={onForm} className="tarif__pay-button">Оставить заявку</div>
            );
        };
    }

    const onForm = () => {
        setActiveMail("tickets@knwh.ru");
        setActiveRate(tariff.categories[activeCategories].orderBtnText ? tariff.categories[activeCategories].orderBtnText : "");
        setDefaultRate(true)
        setForm(true);
        return;
    }

    function handleClick(i) {
        setActiveCategories(i);
    }

    const tarifButtons = tariff.categories.length > 1 
        ? tariff.categories.map((category, i) => {
            return (
                <div key={i} onClick={() => handleClick(i)} className={activeCategories === i ? `tarif__button  tarif__button__active` : `tarif__button`} >{category.button}</div>
            )
        })
        : null;


    return (

        <div className='rates__item'>
            {setLabel(tariff.categories[activeCategories])}
            <div className="tarif__top">
                <h2 className="tarif__title">{tariff.title}</h2>
                <ul className="tarif__list">
                    {setList}
                </ul>
            </div>
            <div className="tarif__bottom">
                <div className="tarif__buttons">
                    {tarifButtons}
                    {setHint(tariff.categories[activeCategories])}
                </div>
                {setPrice(tariff.categories[activeCategories])}
                {setOrderBtn(tariff.categories[activeCategories])}
            </div>
        </div>
    );
};



export default RatesItem;