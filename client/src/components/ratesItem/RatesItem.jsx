import React from 'react';
import { useState } from 'react';
import './ratesItem.scss';
import arrow from '../../ui/icons/arrow.svg';

const RatesItem = ({ title, list, listTwo, buttons, price, price1, price2, href, href1, href2, hint, hint1, hint2, isPay, setForm, setActiveMail, tarif, setDefaultRate, setActiveRate }) => {

    const [activeButton, setActiveButton] = useState(0);

    let tarifListTwo = listTwo.map(({ title }, i) => {
        return (
            <div className="tarif__list-wrapper">
                <img src={arrow} className="tarif__list-marker" />
                <li className="tarif__list-item" key={i}>{title}</li>
            </div>

        )
    })

    const tarifList = list.map(({ title }, i) => {
        return (
            <div className="tarif__list-wrapper">
                <img src={arrow} className="tarif__list-marker" />
                <li className="tarif__list-item" key={i}>{title}</li>
            </div>

        )
    })


    function changeBtn() {
        const str = 'href';
        let result = str + activeButton;
        eval('href' + activeButton);
    }

    const onForm = () => {
        if (tarif === "black") {
            setActiveMail("black@knwh.ru")
            if (title === "Гость") {
                if (activeButton === 0) {
                    setActiveRate("Black - Гость (неделя)")
                }
                if (activeButton === 1) {
                    setActiveRate("Black - Гость (месяц)")
                }
            } else if (title === "Резидент") {
                if (activeButton === 0) {
                    setActiveRate("Black - Резидент (1 месяц)")
                }
                if (activeButton === 1) {
                    setActiveRate("Black - Резидент (3 месяца)")
                }
            } else {
                if (activeButton === 0) {
                    setActiveRate("Black - Гость (1 день)")
                }
                if (activeButton === 1) {
                    setActiveRate("Black - Гость (10 дней)")
                }
                if (activeButton === 2) {
                    setActiveRate("Black - Гость (25 дней)")
                }
            }
            setDefaultRate(true)
            setForm(true);
            return;
        }
        if (tarif === "bulchug") {
            setActiveMail("balchug@knwh.ru")
            if (activeButton === 0) {
                setActiveRate("Balchug - Гость (1 день)")
            }
            if (activeButton === 1) {
                setActiveRate("Balchug - Гость (10 дней)")
            }
            if (activeButton === 2) {
                setActiveRate("Balchug - Гость (25 дней)")
            }
            setDefaultRate(true)
            setForm(true);
            return;
        }
    }

    const swither = (i) => {
        setActiveButton(i);
    }


    const tarifButtons = buttons.map(({ title }, i) => {
        return (
            <div key={i} onClick={() => swither(i)} className={activeButton === i ? `tarif__button  tarif__button__active` : `tarif__button`} >{title}</div>
        )
    })


    return (

        <div className='rates__item'>
            {!isPay && title === "День" && <div className="rates__item-sticker">Количество мест ограниченно</div>}
            <div className="tarif__top">
                <h2 className="tarif__title">{title}</h2>
                <ul className="tarif__list">
                    {activeButton === 0 ? tarifList : tarifListTwo}
                </ul>
            </div>
            <div className="tarif__bottom">
                <div className="tarif__buttons">
                    {tarifButtons}
                    <p className="tarif__hint">{activeButton === 0 ? hint : activeButton === 1 ? hint1 : activeButton === 2 ? hint2 : false}</p>
                </div>
                <div className="tarif__price">
                    <h2 className="tarif__price-number">{activeButton !== 0 ? eval('price' + activeButton) : price} </h2>
                </div>
                {
                    isPay && (tarif === "bulchug" && (title === "Гость" || title === "Резидент"))
                        ?
                        <a href='javascript:void(0)' onClick={() => (activeButton === 0 ? eval(href) : activeButton === 1 ? eval(href1) : activeButton === 2 ? eval(href2) : console.log('error'))} className="tarif__pay-button">Купить</a>
                        :
                        <div onClick={onForm} className="tarif__pay-button">Оставить заявку</div>
                }
            </div>
        </div>
    );
};



export default RatesItem;