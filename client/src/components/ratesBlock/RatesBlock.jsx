
import { useState } from 'react';
import { blackTarif, balchugTarif, simonovTarif } from '../../data/tariffs';
import RatesItem from '../ratesItem/RatesItem';
import Applications from '../applications/Applications';

import './ratesBlock.scss';


const RatesBlock = ({ setForm, setActiveMail, setDefaultRate, setActiveRate, style='beige', activeRate='black', showSwitchBtns=false }) => {
    const ratesHeaderButtons = [
        { name: "black", array: blackTarif, title: 'Тарифы', descr: 'Найдите ваш идеальный тариф', }, 
        { name: "balchug", array: balchugTarif, title: 'Тарифы', descr: 'Найдите ваш идеальный тариф', }, 
        { name: "simonov", array: simonovTarif, title: 'Предложения', descr: 'Найдите ваш идеальный вариант', }];

    let activeRateIndex = 0;

    ratesHeaderButtons.forEach((elem, i) => {
        if(elem.name.toLowerCase() == activeRate.toLowerCase()) activeRateIndex = i;
    })

    const [activeRatesHeader, setActiveRatesHeader] = useState(activeRateIndex);

    const setRatesButtons = ratesHeaderButtons.map((btn, i) => {
        return(
            <button className={activeRatesHeader == i ? 'rates__button rates__button_active' : 'rates__button'} type="button" onClick={() => setActiveRatesHeader(i)}>{btn.name}</button>
        )
    });

    const setRates = ratesHeaderButtons[activeRatesHeader].array.map((rate, i) => {
        return (
            <RatesItem
                tariff={rate}
                setForm={setForm}
                setActiveMail={setActiveMail}
                setDefaultRate={setDefaultRate}
                setActiveRate={setActiveRate}
                key={i}
            />
        );
    });


    return(
        <section className={`rates rates_${style}`}>
            <div className="rates__wrapper container">
                <div className="rates__top">
                    <div className="rates__heading">
                        <h2 className="rates__title">{ratesHeaderButtons[activeRatesHeader].title}</h2>
                        <p className="rates__descr">{ratesHeaderButtons[activeRatesHeader].descr}</p>
                    </div>
                    <div className={showSwitchBtns ? 'rates__buttons rates__buttons_active' : 'rates__buttons'}>{setRatesButtons}</div>

                </div>

                <div className={`rates__grid rates__grid_${ratesHeaderButtons[activeRatesHeader].name}`}>{setRates}</div>

                <Applications
                    title="Посмотрите вживую"
                    descr="Выберите кабинет, который подойдёт именно вашей команде"
                    button="Записаться"
                    style={"apliHome"}
                    setForm={setForm}
                />
                {/* <script id="amoforms_script_947509" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638"></script> */}
            </div>
        </section>
    );
};

export default RatesBlock;