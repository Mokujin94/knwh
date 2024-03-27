import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './gallery.scss';

import black from './img/black.jpg';
import balchug from './img/balchug.png';
import workPlace1 from './img/work-place/1.jpg';
import workPlace2 from './img/work-place/2.jpg';
import workPlace3 from './img/work-place/3.jpg';
import workPlace4 from './img/work-place/4.jpg';
import workPlace5 from './img/work-place/5.jpg';
import workPlace6 from './img/work-place/6.jpg';
import workPlace7 from './img/work-place/7.jpg';
import workPlace8 from './img/work-place/8.jpg';
import workPlace9 from './img/work-place/9.jpg';

import workPlaceMobile1 from './img/mobile/work-place/1.png';
import workPlaceMobile2 from './img/mobile/work-place/2.png';
import workPlaceMobile3 from './img/mobile/work-place/3.png';
import workPlaceMobile4 from './img/mobile/work-place/4.png';
import workPlaceMobile5 from './img/mobile/work-place/5.png';
import workPlaceMobile6 from './img/mobile/work-place/6.png';
import workPlaceMobile7 from './img/mobile/work-place/7.png';
import workPlaceMobile8 from './img/mobile/work-place/8.png';
import workPlaceMobile9 from './img/mobile/work-place/9.png';

import room1 from './img/rooms/1.jpg';
import room2 from './img/rooms/2.jpg';
import room3 from './img/rooms/3.jpg';
import room4 from './img/rooms/4.jpg';
import room5 from './img/rooms/5.jpg';
import room6 from './img/rooms/6.jpg';
import room7 from './img/rooms/7.jpg';
import room8 from './img/rooms/8.jpg';

import roomMobile1 from './img/mobile/rooms/1.png';
import roomMobile2 from './img/mobile/rooms/2.png';
import roomMobile3 from './img/mobile/rooms/3.png';
import roomMobile4 from './img/mobile/rooms/4.png';
import roomMobile5 from './img/mobile/rooms/5.png';
import roomMobile6 from './img/mobile/rooms/6.png';
import roomMobile7 from './img/mobile/rooms/7.png';
import roomMobile8 from './img/mobile/rooms/8.png';

import chilling1 from './img/chilling-rooms/1.jpg';
import chilling2 from './img/chilling-rooms/2.jpg';
import chilling3 from './img/chilling-rooms/3.jpg';
import chilling4 from './img/chilling-rooms/4.jpg';
import chilling5 from './img/chilling-rooms/5.jpg';
import chilling6 from './img/chilling-rooms/6.jpg';
import chilling7 from './img/chilling-rooms/7.jpg';
import chilling8 from './img/chilling-rooms/8.jpg';
import chilling9 from './img/chilling-rooms/9.jpg';
import chilling10 from './img/chilling-rooms/10.jpg';
import chilling11 from './img/chilling-rooms/11.jpg';
import chilling12 from './img/chilling-rooms/12.jpg';
import chilling13 from './img/chilling-rooms/13.jpg';
import chilling14 from './img/chilling-rooms/14.jpg';
import chilling15 from './img/chilling-rooms/15.jpg';

import chillingMobile1 from './img/mobile/chilling-rooms/1.png';
import chillingMobile2 from './img/mobile/chilling-rooms/2.png';
import chillingMobile3 from './img/mobile/chilling-rooms/3.png';
import chillingMobile4 from './img/mobile/chilling-rooms/4.png';
import chillingMobile5 from './img/mobile/chilling-rooms/5.png';
import chillingMobile6 from './img/mobile/chilling-rooms/6.png';
// import chillingMobile7 from './img/mobile/chilling-rooms/7.jpg';
// import chillingMobile8 from './img/mobile/chilling-rooms/8.jpg';
// import chillingMobile9 from './img/mobile/chilling-rooms/9.jpg';
// import chillingMobile10 from './img/mobile/chilling-rooms/10.jpg';
// import chillingMobile11 from './img/mobile/chilling-rooms/11.jpg';
// import chillingMobile12 from './img/mobile/chilling-rooms/12.jpg';
// import chillingMobile13 from './img/mobile/chilling-rooms/13.jpg';
// import chillingMobile14 from './img/mobile/chilling-rooms/14.jpg';
// import chillingMobile15 from './img/mobile/chilling-rooms/15.jpg';

import telegram from '../../ui/icons/footer/telegram.svg';
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import { useRef } from 'react';
import Footer from '../../components/footer/Footer';

const Gallery = () => {
    const ref = useRef(null);
    const windowInnerWidth = document.documentElement.clientWidth;

    const scrollSection = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
            <div className="container">
                <div className="gallery__category">
                    <div onClick={scrollSection} className="gallery__category-item">
                        <img src={black} alt="img" className="gallery__category-item-img" />
                        <div className="gallery__category-item-header">
                            <h2 className="gallery__category-item-title">гАЛЕРЕЯ black</h2>
                            <p className="gallery__category-item-descr">Рабочие зоны, переговорные комнаты и зоны отдыха офисного пространства BLACK недалеко от м.Павелецкая</p>
                        </div>
                    </div>
                    <Link to='/gallery-balchug' className="gallery__category-item">
                        <img src={balchug} alt="img" className="gallery__category-item-img" />
                        <div className="gallery__category-item-header">
                            <h2 className="gallery__category-item-title">гАЛЕРЕЯ bALCHUG</h2>
                            <p className="gallery__category-item-descr">Интерьер пространства BALCHUG, кабинеты и открытые зоны, а также релакс-зоны на набережной Москвы-реки</p>
                        </div>
                    </Link>
                </div>
            </div>
            <section ref={ref} className="work-place">
                <div className="container">
                    <h1 className="work-place__title">Рабочие зоны</h1>
                    <div className="work-place__wrapper">
                        <div className="work-place__item grid-item_1"><img src={windowInnerWidth < 600 ? workPlaceMobile1 : workPlace1} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_2"><img src={windowInnerWidth < 600 ? workPlaceMobile2 : workPlace2} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_3"><img src={windowInnerWidth < 600 ? workPlaceMobile3 : workPlace3} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_4"><img src={windowInnerWidth < 600 ? workPlaceMobile4 : workPlace4} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_5"><img src={windowInnerWidth < 600 ? workPlaceMobile5 : workPlace5} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_6"><img src={windowInnerWidth < 600 ? workPlaceMobile6 : workPlace6} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_7"><img src={windowInnerWidth < 600 ? workPlaceMobile7 : workPlace7} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_8"><img src={windowInnerWidth < 600 ? workPlaceMobile8 : workPlace8} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_9"><img src={windowInnerWidth < 600 ? workPlaceMobile9 : workPlace9} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_10">
                            <p className="work-place__text">KW Black — это современная площадка, которая расположена в пешей доступности от метро «Павелецкая». Занимает четыре этажа бизнес-центра «Black&White»!</p>
                        </div>
                    </div>
                    <h2 className="work-place__title">Переговорные</h2>
                    <div className="work-place__wrapper">
                        <div className="work-place__item grid-item_11"><img src={windowInnerWidth < 600 ? roomMobile1 : room1} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_12"><img src={windowInnerWidth < 600 ? roomMobile2 : room2} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_13"><img src={windowInnerWidth < 600 ? roomMobile3 : room3} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_14"><img src={windowInnerWidth < 600 ? roomMobile4 : room4} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_15"><img src={windowInnerWidth < 600 ? roomMobile5 : room5} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_16"><img src={windowInnerWidth < 600 ? roomMobile6 : room6} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_17"><img src={windowInnerWidth < 600 ? roomMobile7 : room7} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_18"><img src={windowInnerWidth < 600 ? roomMobile8 : room8} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_19">
                            <p className="work-place__text">Каждый этаж оборудован рабочими зонами и зонами для отдыха. Общая площадь пространства составляет 3 400 м2</p>
                        </div>
                    </div>
                    <h2 className="work-place__title">зоны ОБЩЕГО ПОЛЬЗОВАНИЯ</h2>
                    <div className="work-place__wrapper">
                        <div className="work-place__item grid-item_20"><img src={windowInnerWidth < 600 ? chillingMobile1 : chilling1} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_21"><img src={windowInnerWidth < 600 ? chillingMobile2 : chilling2} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_22"><img src={windowInnerWidth < 600 ? chillingMobile3 : chilling4} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_23"><img src={windowInnerWidth < 600 ? chillingMobile4 : chilling3} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_24"><img src={windowInnerWidth < 600 ? chillingMobile5 : chilling5} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_25"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling6} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_26">
                            <p className="work-place__text">KW Black максимально удобен как для корпоративных резидентов так и розничных</p>
                        </div>
                        {windowInnerWidth < 600 ?
                            false
                        :
                        <>
                            <div className="work-place__item grid-item_27"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling7} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_28"><img src={windowInnerWidth < 600 ? chillingMobile3 : chilling8} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_29"><img src={windowInnerWidth < 600 ? chillingMobile4 : chilling9} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_30"><img src={windowInnerWidth < 600 ? chillingMobile5 : chilling10} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_31"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling11} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_32"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling12} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_33"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling13} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_34"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling15} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_35"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling14} alt="img" className="work-place__img" /></div>
                        </>
                        }

                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default Gallery;