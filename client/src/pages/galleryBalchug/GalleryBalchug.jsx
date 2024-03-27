import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './galleryBalchug.scss';

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

import roomMobile1 from './img/mobile/rooms/1.png';
import roomMobile2 from './img/mobile/rooms/2.png';
import roomMobile3 from './img/mobile/rooms/3.png';
import roomMobile4 from './img/mobile/rooms/4.png';
import roomMobile5 from './img/mobile/rooms/5.png';
import roomMobile6 from './img/mobile/rooms/6.png';

import chilling1 from './img/chilling-rooms/1.jpg';
import chilling2 from './img/chilling-rooms/2.jpg';
import chilling3 from './img/chilling-rooms/3.jpg';
import chilling4 from './img/chilling-rooms/4.jpg';
import chilling5 from './img/chilling-rooms/5.jpg';
import chilling6 from './img/chilling-rooms/6.jpg';
import chilling7 from './img/chilling-rooms/7.jpg';
import chilling8 from './img/chilling-rooms/8.jpg';

import chillingMobile1 from './img/mobile/chilling-rooms/1.png';
import chillingMobile2 from './img/mobile/chilling-rooms/2.png';
import chillingMobile3 from './img/mobile/chilling-rooms/3.png';
import chillingMobile4 from './img/mobile/chilling-rooms/4.png';
import chillingMobile5 from './img/mobile/chilling-rooms/5.png';
import chillingMobile6 from './img/mobile/chilling-rooms/6.png';

import telegram from '../../ui/icons/footer/telegram.svg';
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import { useRef } from 'react';
import Footer from '../../components/footer/Footer';

const GalleryBalchug = () => {
    const ref = useRef(null);
    const windowInnerWidth = document.documentElement.clientWidth;

    const scrollSection = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <>
        <div className="bg">
            <div className="container">
                <div className="gallery__category gallery__category__balchug">
                    <Link to='/gallery' className="gallery__category-item">
                        <img src={black} alt="img" className="gallery__category-item-img" />
                        <div className="gallery__category-item-header">
                            <h2 className="gallery__category-item-title">гАЛЕРЕЯ black</h2>
                            <p className="gallery__category-item-descr">Рабочие зоны, переговорные комнаты и зоны отдыха офисного пространства BLACK недалеко от м.Павелецкая</p>
                        </div>
                    </Link>
                    <div onClick={scrollSection} className="gallery__category-item">
                        <img src={balchug} alt="img" className="gallery__category-item-img" />
                        <div className="gallery__category-item-header">
                            <h2 className="gallery__category-item-title">гАЛЕРЕЯ bALCHUG</h2>
                            <p className="gallery__category-item-descr">Интерьер пространства BALCHUG, кабинеты и открытые зоны, а также релакс-зоны на набережной Москвы-реки</p>
                        </div>
                    </div>
                </div>
            </div>
            <section ref={ref} className="work-place work-place__balchug">
                <div className="container">
                    <h1 className="work-place__title">Рабочие зоны</h1>
                    <div className="work-place__wrapper">
                        <div className="work-place__item grid-item_1 grid-item-balchug_1"><img src={windowInnerWidth < 600 ? workPlaceMobile1 : workPlace1} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_2 grid-item-balchug_2"><img src={windowInnerWidth < 600 ? workPlaceMobile2 : workPlace2} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_3 grid-item-balchug_3"><img src={windowInnerWidth < 600 ? workPlaceMobile3 : workPlace3} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_4 grid-item-balchug_4"><img src={windowInnerWidth < 600 ? workPlaceMobile4 : workPlace4} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_5 grid-item-balchug_5"><img src={windowInnerWidth < 600 ? workPlaceMobile5 : workPlace5} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_6 grid-item-balchug_6"><img src={windowInnerWidth < 600 ? workPlaceMobile6 : workPlace6} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_7 grid-item-balchug_7"><img src={windowInnerWidth < 600 ? workPlaceMobile7 : workPlace7} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_8 grid-item-balchug_8"><img src={windowInnerWidth < 600 ? workPlaceMobile8 : workPlace8} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_9 grid-item-balchug_9"><img src={windowInnerWidth < 600 ? workPlaceMobile9 : workPlace9} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_10 grid-item-balchug_10">
                            <p className="work-place__text">KW Balchug — это комфортное и продуманное пространство, совмещающее в себе удобства отдельных кабинетов и вайб просторных 
open-space </p>
                        </div>
                    </div>
                    <h2 className="work-place__title">Переговорные</h2>
                    <div className="work-place__wrapper">
                        <div className="work-place__item grid-item_11 grid-item-balchug_11"><img src={windowInnerWidth < 600 ? roomMobile1 : room1} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_12 grid-item-balchug_12"><img src={windowInnerWidth < 600 ? roomMobile2 : room2} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_13 grid-item-balchug_13"><img src={windowInnerWidth < 600 ? roomMobile3 : room3} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_14 grid-item-balchug_14"><img src={windowInnerWidth < 600 ? roomMobile4 : room4} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_15 grid-item-balchug_15"><img src={windowInnerWidth < 600 ? roomMobile5 : room5} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_16 grid-item-balchug_16"><img src={windowInnerWidth < 600 ? roomMobile6 : room6} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_19 grid-item-balchug_19">
                            <p className="work-place__text">Площадка сочетает в себе все преимущества отдельно стоящего здания. Просторная локация, где весь первый этаж представляет собой огромную зону отдыха </p>
                        </div>
                    </div>
                    <h2 className="work-place__title">зоны ОБЩЕГО ПОЛЬЗОВАНИЯ</h2>
                    <div className="work-place__wrapper">
                        <div className="work-place__item grid-item_20 grid-item-balchug_20"><img src={windowInnerWidth < 600 ? chillingMobile1 : chilling1} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_21 grid-item-balchug_21"><img src={windowInnerWidth < 600 ? chillingMobile2 : chilling2} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_22 grid-item-balchug_22"><img src={windowInnerWidth < 600 ? chillingMobile3 : chilling3} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_23 grid-item-balchug_23"><img src={windowInnerWidth < 600 ? chillingMobile4 : chilling4} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_24 grid-item-balchug_24"><img src={windowInnerWidth < 600 ? chillingMobile5 : chilling5} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_25 grid-item-balchug_25"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling6} alt="img" className="work-place__img" /></div>
                        <div className="work-place__item grid-item_26 grid-item-balchug_26">
                            <p className="work-place__text">Кроме привычных общих зон, в KW Balchug есть видовая терраса на 5 этаже, которая в теплый сезон укомплектована мягкой мебелью для еще более комфортного рабочего процесса</p>
                        </div>
                        {windowInnerWidth < 600 ?
                            false
                        :
                        <>
                            <div className="work-place__item grid-item_27 grid-item-balchug_27"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling7} alt="img" className="work-place__img" /></div>
                            <div className="work-place__item grid-item_28 grid-item-balchug_28"><img src={windowInnerWidth < 600 ? chillingMobile6 : chilling8} alt="img" className="work-place__img" /></div>
                        </>
                        }
                    </div>
                </div>
            </section>
            <Footer style={'footer__white footer__primary'}/>
        </div>

        </>
    );
};

export default GalleryBalchug;