import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './footer.scss';

import logo from './icons/logo.svg';

import telegram from '../../ui/icons/footer/telegram.svg';
import taplink from '../../ui/icons/footer/taplink.png'
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import visa from '../../ui/icons/footer/visa.png';
import master from '../../ui/icons/footer/masterCard.png';
import mir from '../../ui/icons/footer/mir.png';
import jcb from '../../ui/icons/footer/jcb.png';

import ofer from '../../polytics/Оферта.pdf';
import taplink2 from './icons/menu.svg'

function Footer({style}) {
  return (
    <footer className={style ? `footer ${style}` : 'footer'}>
        <div className="footer__left">
            <ul className="footer__menu">
                <li className="footer__menu-item">
                    <img src={logo} alt="logo" className="footer__logo" />
                </li>
                <li className="footer__menu-item"><NavLink to="/" className="footer__menu-path">ГЛАВНАЯ</NavLink></li>
                <li className="footer__menu-item"><NavLink to="/black" className="footer__menu-path">BLACK</NavLink></li>
                <li className="footer__menu-item"><NavLink to="/balchug" className="footer__menu-path">BALCHUG</NavLink></li>
                <li className="footer__menu-item"><NavLink to="/rooms" className="footer__menu-path">ПЕРЕГОВОРКИ</NavLink></li>
                <li className="footer__menu-item"><NavLink to="/gallery" className="footer__menu-path">ГАЛЕРЕЯ</NavLink></li>
                <li className="footer__menu-item"><NavLink to="/services" className="footer__menu-path">УСЛУГИ</NavLink></li>
                {/* <li className="footer__menu-item"><NavLink to="/team" className="footer__menu-path">КОМАНДА</NavLink></li> */}
                <li className="footer__menu-item"><NavLink to="/contact" className="footer__menu-path">КОНТАКТЫ</NavLink></li>
            </ul>
        </div>
        <div className="footer__center">
            <div className="footer__contact">
                <div className="footer__contact-item">
                    <h2 className="footer__contact-title">КОНТАКТЫ</h2>
                    <p className="footer__contact-descr"><a href="tel:74996478563">+7 (499) 647-85-63</a> <br /> <a href="mailto:hello@knwh.ru">hello@knwh.ru</a></p>
                </div>
                <div className="footer__contact-item">
                    <h2 className="footer__contact-title">Адрес</h2>
                    <p className="footer__contact-descr">BLACK: <br /> м. Павелецкая, Кожевническая 14 <br /> Вход со стороны ул. Летниковской <br /> <br /> BALCHUG: <br /> м. Новокузнецкая, <br /> Садовническая наб., 9</p>
                </div>
                <div className="knwh">© 2023, KNOW WHERE</div>
            </div>
            <div className="footer__social">
                <div className="footer__social-block">
                    <div className="footer__social-icons">
                        <a target='_blank' href="https://t.me/knwh_cowork"><img src={telegram} alt="vk" className="footer__social-icon" /></a>
                        <a target='_blank' href="https://httpsknwhru.taplink.ws/?from=qr"><img src={taplink2} alt="telegram" className="footer__social-icon footer__social-icon-taplink" /></a>
                    </div>
                    <p className="footer__social-descr">Пишите нам в любимых <br /> мессенджерах. Мы отвечаем <br /> каждый день с 9:00 до 21:00</p>
                </div>
                <div className="footer__social-block">
                    <div className="footer__social-icons">
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=pro.spacepass.mobile.knwh&hl=en_US"><img src={market} alt="market" className="footer__social-icon" /></a>
                        <a target='_blank' href="https://apps.apple.com/ru/app/kw/id1625112664"><img src={store} alt="store" className="footer__social-icon" /></a>
                    </div>
                    <p className="footer__social-descr">Наше приложение в Google Play <br /> и App Store</p>
                </div>
                <div className="polytics">
                    <a target='_blank' href={ofer}>Оферта</a>
                </div>
                <div className="polytics">
                    <Link to='/polytics'>Политика конфиденциальности</Link>
                </div>
            </div>

        </div>
        <div className="footer__right">
            <div className="cards">
                <img src={visa} alt="card" />
                <img src={master} alt="card" />
                <img src={mir} alt="card" />
                <img src={jcb} alt="card" />
            </div>
            <div className="rekvisits">
            <span>Реквизиты </span> <br /><br />
            000 «РС Павелецкая» <br />
            <br />
            ИНН 9725027581/ ОГРН 1197746756789. <br />
            <br />
            Юридический адрес: 115114, г Москва, ул. Кожевническая, д. 14, стр. 2, эт. 3, пом. 3, ком. 12. <br />
            Тел./факс: +7 (499) 647-85-63. <br />
            <br />
            000 «Смарт Офис» <br />
            ИНН 9705174676/ ОГРН 1227700462142. <br />
            <br />
            Юридический адрес: 115035, г. Москва, Садовническая наб. д. 9, эт. 1, пом.2, ком. 12 <br />
            Тел./факс: +7 (499) 647-85-63. <br />
            </div>
        </div>
    </footer>
  )
}

export default Footer