import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.scss';

import logo from './img/logo.svg';
import telegram from './img/telegram.svg';
import vk from './img/vk.svg';
import taplink2 from '../footer/icons/menu.svg'

const Header = ({burger, onClick}) => {

    const location = useLocation();


    return (
        <>
            <header className='header' style={{right: burger ? '0' : ''}}>
                <div className="header__container">
                    <menu className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item menu__list-item-logo"><NavLink to="/" activeClassName="active" className="menu__list-path"><img src={logo} alt="" /></NavLink></li>
                            <li className="menu__list-item"><NavLink to="/" activeClassName="active" className="menu__list-path">ГЛАВНАЯ</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/black" activeClassName="active" className="menu__list-path">BLACK</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/balchug" activeClassName="active" className="menu__list-path">BALCHUG</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/rooms" activeClassName="active" className="menu__list-path">ПЕРЕГОВОРКИ</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/gallery" className={location.pathname === '/gallery' || location.pathname === '/gallery-balchug' ? 'menu__list-path active' : 'menu__list-path'} >ГАЛЕРЕЯ</NavLink></li>
                            <li className="menu__list-item"><NavLink to="/services" activeClassName="active" className="menu__list-path">УСЛУГИ</NavLink></li>
                            {/* <li className="menu__list-item"><NavLink to="/team" activeClassName="active" className="menu__list-path">КОМАНДА</NavLink></li> */}
                            <li className="menu__list-item"><NavLink to="/contact" activeClassName="active" className="menu__list-path">КОНТАКТЫ</NavLink></li>
                            <li className="menu__list-item"><a href="https://my.knwh.ru/login" style={{border: '1px solid #B3A16E', padding: '7px 30px', borderRadius: '10px'}} activeClassName="active" className="menu__list-path menu__list-path-auth">ВОЙТИ</a></li>
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