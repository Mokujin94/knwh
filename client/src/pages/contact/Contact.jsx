import React from 'react';
import { NavLink } from 'react-router-dom';

import './contact.scss'

import bg from './img/bg.png';
import black1 from './img/black1.jpg';
import black2 from './img/black2.jpg';
import black3 from './img/black3.jpg';
import black4 from './img/black4.jpg';
import balchug1 from './img/balchug1.jpg';
import balchug2 from './img/balchug2.jpg';
import balchug3 from './img/balchug3.jpg';
import balchug4 from './img/balchug4.jpg';
import telegram from '../../ui/icons/footer/telegram.svg';
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import Footer from '../../components/footer/Footer';

import taplink2 from '../../components/footer/icons/menu.svg'

const Contact = () => {
    return (
        <>
            <section className="black-contact">
                <div className="container">
                    <h1 className="black-contact__title">Контакты</h1>
                    <div className="black-contact__numbers">
                        <div className="black-contact__left">
                            <div className="black-contact__left-item">
                                <h2 className="black-contact__numberFor">телефон</h2>
                                <p className="black-contact__number">+7 (499) 647-85-63</p>
                            </div>
                            <div className="black-contact__left-item">
                                <h2 className="black-contact__numberFor">общая почта</h2>
                                <p className="black-contact__number">hello@knwh.ru</p>
                            </div>
                            <div className="black-contact__left-item">
                                <p className="black-contact__number">ПО ВОПРОСАМ РАБОТЫ <br /> С БРОКЕРСКИМИ АГЕНТСТВАМИ</p>
                                <p className="black-contact__number">ka@knwh.ru</p>
                            </div>
                        </div>
                        <div className="black-contact__left">
                            <div className="black-contact__left-item">
                                <h2 className="black-contact__numberFor">почта BLACK</h2>
                                <p className="black-contact__number">black@knwh.ru</p>
                            </div>
                            <div className="black-contact__left-item">
                                <h2 className="black-contact__numberFor">почта BALCHUG</h2>
                                <p className="black-contact__number">balchug@knwh.ru</p>
                            </div>
                        </div>
                        <div className="black-contact__social">
                            <div className="black-contact__social-img">
                            <a target='_blank' href="https://t.me/knwh_cowork"><img src={telegram} alt="vk" /></a>
                            </div>
                            <div className="black-contact__social-img">
                            <a target='_blank' href="https://httpsknwhru.taplink.ws/?from=qr"><img src={taplink2} alt="telegram" className="footer__social-icon footer__social-icon-taplink" /></a>
                            </div>
                        </div>
                    </div>
                    <div className='hr'></div>
                    <div className="black-contact__bottom">
                        <div className="black-contact__header">
                            <h2 className="black-contact__header-title">black</h2>
                            <p className="black-contact__header-descr">схема проезда</p>
                        </div>
                        <div className="way">
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={black1} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">1.</div>
                                    <p className="way__title">Выход из метро Павелецкая из Павелецкого вокзала, перед ТЦ «Павелецкая Плаза» поверните направо на ул. Кожевническая</p>
                                </div>
                            </div>
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={black2} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">2.</div>
                                    <p className="way__title">По ул. Кожевническая двигайтесь прямо  до первого светофора</p>
                                </div>
                            </div>
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={black3} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">3.</div>
                                    <p className="way__title">На светофоре перейдите через дорогу прямо и поверните направо на ул. Летниковская</p>
                                </div>
                            </div>
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={black4} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">4.</div>
                                    <p className="way__title">Двигайтесь прямо по ул. Летниковская ещё 100 метров до «Black&White». На ресепшн БЦ назовите кодовое слово «в коворкинг». Сразу за турникетами поверните налево, вход в стеклянную дверь.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="balchug-contact">
                <div className="container">
                    <div className="black-contact__bottom">
                        <div className="black-contact__header">
                            <h2 className="black-contact__header-title">balchug</h2>
                            <p className="black-contact__header-descr">схема проезда</p>
                        </div>
                        <div className="way">
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={balchug1} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">1.</div>
                                    <p className="way__title">Выход из метро Новокузнецкая, на выходе поверните направо на ул. Пятницкую</p>
                                </div>
                            </div>
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={balchug2} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">2.</div>
                                    <p className="way__title">По ул. Пятницкой двигайтесь прямо до первого светофора, на набережную</p>
                                </div>
                            </div>
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={balchug3} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">3.</div>
                                    <p className="way__title">Дойдя до светофора, переходите через дорогу, потом по мосту через реку и поворачивайте направо на Садовническую набережную</p>
                                </div>
                            </div>
                            <div className="way__item">
                                <div className="way__img">
                                    <img src={balchug4} alt="img" />
                                </div>
                                <div className="way__header">
                                    <div className="way__count">4.</div>
                                    <p className="way__title">Пройдите еще 180 метров и вы увидите желтое здание, вход в арку</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer style={'footer__white footer__primary'}/>
        </>
    );
};

export default Contact;