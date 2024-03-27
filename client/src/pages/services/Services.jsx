import React from 'react';
import { NavLink } from 'react-router-dom';
import ServicesPageBlock from '../../components/servicesPageBlock/ServicesPageBlock';

import './services.scss';

import clock from './icons/clock.svg';
import wifi from './icons/wifi.svg';
import technic from './icons/technic.svg';
import zone from './icons/zone.svg';
import coffee from './icons/coffee.svg';
import cofee2 from './icons/cofee2.svg';
import call from './icons/call.svg';
import paper from './icons/paper.svg';
import cleener from './icons/cleener.svg';
import item from './icons/item.svg';
import table from './icons/table.svg';
import замок from './icons/замок.svg';
import кран from './icons/кран.svg';
import defend from './icons/defend.svg';
import telegram from '../../ui/icons/footer/telegram.svg';
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import Footer from '../../components/footer/Footer';



const Services = () => {

    const blocks =[
        {icon: clock, title: 'доступ 24/7', descr: 'Круглосуточный доступ без выходных на все наши площадки'},
        {icon: wifi, title: 'БЕЗЛИМИТНЫЙ ИНТЕРНЕТ', descr: 'При покупке любого тарифа, мы предоставляем доступ к безлимитному интернету'},
        {icon: technic, title: 'ОБОРУДОВАННЫЕ ПЕРЕГОВОРКИ', descr: 'Для проведения продуктивных встреч на всех наших площадках оборудованы переговорные комнаты вместимостью от 6 до 65 посадочных мест. Забронировать можно на сайте или в мобильном приложении'},
        {icon: zone, title: 'МЯГКИЕ ЗОНЫ', descr: 'Оборудованные мягкие зоны отлично подойдут для проведения неформальных встреч'},
        {icon: coffee, title: 'ОБОРУДОВАННЫЕ КУХНИ', descr: 'Холодильники, микроволновки, вся необходимая посуда, столы и барные стойки'},
        {icon: cofee2, title: 'ВОДА, ЧАЙ, КОФЕ', descr: 'Безлимитный чай, кофе, вода (холодная, горячая, газированная) на всех кухнях'},
        {icon: call, title: 'ТЕЛЕФОННЫЕ БУДКИ', descr: 'Оборудованные шумоизолированные телефонные будки для звонков'},
        {icon: paper, title: 'ПРИНТЕР И РАСХОДНИКИ', descr: 'Цветные МФУ для печати и сканирования в формате А3 и А4. Ограничение по печати - 30 листов в день на 1 человека'},
        {icon: cleener, title: 'УБОРКА', descr: 'Ежедневная поддерживающая уборка рабочих и общих зон. Генеральная уборка в выходные дни'},
        {icon: item, title: 'УСЛУГИ РЕСЕПШН', descr: 'Каждый день на ресепшн вас и ваших гостей готовы встретить наши администраторы, а так же принять корреспонденцию и ответить на все возникающие вопросы'},
        {icon: table, title: 'МЕБЕЛЬ: КРЕСЛА, СТОЛЫ', descr: 'Все рабочие места оборудованы необходимой мебелью, а именно столами и креслами'},
        {icon: замок, title: 'СКУД, ПРОПУСКА ОТ КОВОРКИНГА', descr: 'Все двери закрываются на СКУД, для входа у администратора можно получить пропуск'},
        {icon: кран, title: 'КОММУНАЛЬНЫЕ УСЛУГИ', descr: 'Электроэнергия, вода и прочие коммунальные услуги включены в стоимость любого тарифа'},
        {icon: defend, title: 'КРУГЛОСУТОЧНАЯ ОХРАНА', descr: 'На всех наших площадках 24/7 находится охрана для обеспечения порядка и вашей безопасности'},
    ];

    const block = blocks.map(({icon, title, descr}, i) => {
        return <ServicesPageBlock icon={icon} title={title} descr={descr} key={i}/>
    });

    return (
        <>
            <section className="services-page">
                <div className="container">
                    <div className="services-page__header">
                        <h1 className="services-page__title">Услуги</h1>
                        <p className="services-page__descr">Сеть гибких офисных пространств KW - это услуги высокого качества для вашей комфортной работы</p>
                    </div>
                    <div className="services-page__wrapper">
                        {block}
                    </div>
                </div>
            </section>
            <Footer/>
        </>

    );
};

export default Services;