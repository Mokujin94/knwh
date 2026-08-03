import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.scss';

import logo from './img/logo.svg';
import telegram from './img/telegram.svg';
import vk from './img/vk.svg';
import taplink2 from '../footer/icons/menu.svg'

const Header = ({burger, onClick}) => {

    const location = useLocation();

    const menuItemsArr = [
        { link: '/', name: 'ГЛАВНАЯ', isActive: false, },
        { link: '/black', name: 'BLACK', isActive: false, },
        { link: '/balchug', name: 'BALCHUG', isActive: false, },
        { link: '/simonov', name: ['SIMONOV', <br/>, '(скоро открытие)'], isUnactive: false, isActive: false, },
        { link: '/rooms', name: 'ПЕРЕГОВОРКИ', isActive: false, },
        { link: '/gallery', name: 'ГАЛЕРЕЯ', isActive: false, },
        { link: '/services', name: 'УСЛУГИ', isActive: false, },
        // { link: '/team', name: 'КОМАНДА', isActive: false, },
        { link: '/contact', name: 'КОНТАКТЫ', isActive: false, },
        // { link: 'https://my.knwh.ru/login', name: 'ВОЙТИ', isActive: false, },
    ];

    menuItemsArr.forEach((listItem, i) => {
        if(listItem.link == location.pathname || (location.pathname == '/gallery-balchug' && listItem.link == '/gallery')) {
            menuItemsArr[i].isActive = true; 
        }
    })


    const setMenuList = menuItemsArr.map((listItem, i) => {
        let itemClassName = 'menu__list-path';
        if(listItem.isActive) itemClassName += ' active';
        if(listItem.isUnactive) itemClassName += ' unactive';

        return (
            <li className="menu__list-item" key={i}><NavLink to={listItem.link} className={itemClassName}>{listItem.name}</NavLink></li>
        );
    });

    return (
        <>
            <header className='header' style={{right: burger ? '0' : ''}}>
                <div className="header__container">
                    <menu className="menu">
                        <ul className="menu__list">
                            {setMenuList}
                        </ul>
                        <div className="menu__bottom">
                            <div className="menu__social">
                                <a target='_blank' href="https://t.me/knwh_cowork"><img src={telegram} alt="icon" /></a>
                                <a target='_blank' href="https://httpsknwhru.taplink.ws/?from=qr"><img style={{filter: 'brightness(0) saturate(100%) invert(68%) sepia(8%) saturate(1550%) hue-rotate(7deg) brightness(94%) contrast(87%)'}} src={taplink2} alt="icon" /></a>
                            </div>
                            <p className="menu__descr">Мы отвечаем каждый <br />  день с 9:00 до 21:00</p>
                        </div>
                    </menu>
                </div>
            </header>
            <div onClick={onClick} className={burger ? 'burger-bg burger-bg__active' : 'burger-bg'}></div>
        </>
    );
};

export default Header;