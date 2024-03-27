import React, { useRef, useState } from 'react';
import './polityc.scss'

import icon from './icons/icon.svg'
import polytic from '../../polytics/Политика конфиденциальности KNWH.pdf';
import download from '../../ui/icons/polytic/download.svg'
import arrow from '../../ui/icons/polytic/arrow.svg'
import arrow3 from './icons/arrow3.svg'
import arrow4 from './icons/arrow4.svg'
import arrowTop from './icons/arrowTop.svg'
import iIcon from './icons/i.svg'
import galka from './icons/galka.svg'
import hz from './icons/hz.svg'
import lupa from './icons/lupa.svg'
import palka from './icons/palka.svg'
import arrowWhite from './icons/arrowWhite.svg'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import arrowBlockLeft from './icons/arrowBlockLeft.svg'
import arrowBlockRight from './icons/arrowBlockRight.svg'
import arrowBlockLeftBottom from './icons/arrowBlockLeftBottom.svg'
import mobileSwitcher from './icons/mobileSwitcher.svg'
import mobileSwitcherReverse from './icons/mobileSwitcherReverse.svg'

// import ivan from 'https://t.me/douborn'
// import julia from 'https://t.me/jujuleee'
// import yakov from 'https://t.me/Yakowst'
import { Link } from 'react-router-dom';

const Polityc = () => {
    const windowInnerWidth = document.documentElement.clientWidth;

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);

    const scrollSection1 = () => {
        ref1.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection2 = () => {
        ref2.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection3 = () => {
        ref3.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection4 = () => {
        ref4.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection5 = () => {
        ref5.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection6 = () => {
        ref6.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection7 = () => {
        ref7.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection8 = () => {
        ref8.current?.scrollIntoView({behavior: 'smooth'})
    }
    const scrollSection9 = () => {
        ref9.current?.scrollIntoView({behavior: 'smooth'})
    }


    const [mobileSwitcherButton, setMobileSwitcherButton] = useState(false)




    return (
        <div className='polytic__bg'>
            <div className="container container__polytic">
                <h1 className="polytic__title">Политика <br /> конфиденциальности</h1>
                <h1 className="polytic__title polytic__title-mobile">Политика <br /> конфиденци-альности</h1>
                <div className="polytic__top-info">
                    <p className="polytic__info">
                    Примерное время прочтения: 10 минут
                    </p>
                    <p className="polytic__info polytic__info__descktop">
                    Последнее обновление: 22.02.2023    
                    </p>
                    <img src={icon} alt="icon" className="polytic__info-icon" />
                </div>
                <div className="polytic__download">
                    <p className="polytic__download-title">Ознакомиться с политикой в формате PDF <a href={polytic}>Скачать</a> <img src={download} alt="icon" /></p>
                    <p className="polytic__download-title polytic__download-title__mobile">Последнее обновление: 22.02.2023</p>
                </div>
                <div className="its-polytic">
                    <div className="its-polytic__top">
                        <div className="its-polytic__top-left">
                            <h2 className="its-polytic__top-left-title">Это Политика конфиденциальности сети гибких офисов «KNOW WHERE»</h2>
                            <h2 className="its-polytic__top-left-descr">(далее — <span>Политика</span>)</h2>
                        </div>
                        <div className="its-polytic__top-right">
                            <div className="its-polytic__top-right-top">Когда в Политике используются слова «мы», «нас» и прочие, говорится об Операторах персональных данных, а именно:</div>
                            <div className="its-polytic__top-right-middle">
                                <div className="its-polytic__top-right-middle-item">
                                    <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                                    <div className="its-polytic__top-right-middle-item-text">ООО «РС Павелецкая» ИНН: 9725027581</div>
                                </div>
                                <div className="its-polytic__top-right-middle-item">
                                    <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                                    <div className="its-polytic__top-right-middle-item-text">ООО «РС Балчуг» ИНН: 9705123030</div>
                                </div>
                                <div className="its-polytic__top-right-middle-item">
                                    <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                                    <div className="its-polytic__top-right-middle-item-text">ООО «Смарт Офис» ИНН: 9705174676.</div>
                                </div>
                            </div>
                            <div className="its-polytic__top-right-bottom">Подробнее в разделе Реквизиты операторов</div>
                        </div>
                    </div>
                    <div className="its-polytic__line"></div>
                    <div className="its-polytic__top">
                        <div className="its-polytic__top-left">
                            <h2 className="its-polytic__top-left-title">В Политике мы обращаемся к вам как:</h2>
                        </div>
                        <div className="its-polytic__top-right">
                            <div className="its-polytic__top-right-middle">
                                <div className="its-polytic__top-right-middle-item">
                                    <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                                    <div className="its-polytic__top-right-middle-item-text">Пользователям сайта knwh.ru (далее — сайт)</div>
                                </div>
                                <div className="its-polytic__top-right-middle-item">
                                    <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                                    <div className="its-polytic__top-right-middle-item-text">Мобильного приложения «KW» (далее — приложение)</div>
                                </div>
                                <div className="its-polytic__top-right-middle-item">
                                    <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                                    <div className="its-polytic__top-right-middle-item-text">А также посетителям наших гибких офисов (далее — Пользователи/Клиенты)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sections">
                    <div className="sections__title">разделы</div>
                    <div className="sections__wrapper">
                        <div onClick={scrollSection1} className="sections__item">
                            <div className="sections__item-title">О чем эта политика?</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection6} className="sections__item">
                            <div className="sections__item-title">Защита ПД</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection2} className="sections__item">
                            <div className="sections__item-title">Ключевые понятия</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection7} className="sections__item">
                            <div className="sections__item-title">Изменение политики</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection3} className="sections__item">
                            <div className="sections__item-title">Согласие на обработку ПД</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection8} className="sections__item">
                            <div className="sections__item-title">Операторы персональных данных</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection4} className="sections__item">
                            <div className="sections__item-title">Ваши права как субъекта ПД</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection9} className="sections__item">
                            <div className="sections__item-title">Как с нами связаться?</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                        <div onClick={scrollSection5} className="sections__item">
                            <div className="sections__item-title">Взаимодействие с ПД</div>
                            <div className="sections__item-icon">
                                <img src={arrow} alt="icon" />
                            </div>
                            <div className="sections__item-line"></div>
                        </div>
                    </div>
                </div>
                <div ref={ref1} className="about-polytic">
                    <img className='about-polytic__arrow' src={arrow3} alt="icon" />
                    <div className="about-polytic__title"><Res/></div> 
                    <div className="about-polytic__wrapper">
                        <div className="about-polytic__wrapper-item">
                            <div className="about-polytic__wrapper-item-top">
                                <img src={arrow} alt="icon" />
                                <div>для вас</div>
                            </div>
                            <div className="about-polytic__wrapper-item-bottom">
                                <p>В Политике описываются ваши права как субъекта персональных данных и способы их реализации 
                                и защиты. Здесь мы рассказываем, как предоставить согласие на обработку персональных данных</p>
                            </div>
                        </div>
                        <div className="about-polytic__wrapper-item">
                            <div className="about-polytic__wrapper-item-top">
                                <img src={arrow} alt="icon" />
                                <div>ПРО НАС</div>
                            </div>
                            <div className="about-polytic__wrapper-item-bottom">
                                <p>В Политике также изложены наши подходы к работе с персональными данными Клиентов, а именно какие персональные данные мы собираем и для каких целей, какие виды их обработки используем и как обеспечиваем их сохранность и конфиденциальность</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref2} className="concepts-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockLeft} alt="icon" className="arrowBlockLeft" />
                    <div className="concepts-polytic__title">Ключевые понятия</div>
                    <div className="concepts-polytic__wrapper">
                        <div className="concepts-polytic__wrapper-item">
                            <div className="concepts-polytic__wrapper-item-left">
                                <div className="concepts-polytic__wrapper-item-left-title">
                                Персональные данные
                                </div>
                                <div className="concepts-polytic__wrapper-item-left-descr">
                                (далее — ПД)
                                </div>
                            </div>
                            <div className="concepts-polytic__wrapper-item-right">
                            Любая информация о человеке (субъекте персональных данных), позволяющая его идентифицировать
                            </div>
                        </div>
                        <div className="concepts-polytic__wrapper-item">
                            <div className="concepts-polytic__wrapper-item-left">
                                <div className="concepts-polytic__wrapper-item-left-title">
                                Обработка пд
                                </div>
                            </div>
                            <div className="concepts-polytic__wrapper-item-right">
                            Любое действие (операция) или совокупность действий (операций) с ПД, с использованием или без использования средств автоматизации
                            </div>
                        </div>
                        <div className="concepts-polytic__wrapper-item">
                            <div className="concepts-polytic__wrapper-item-left">
                                <div className="concepts-polytic__wrapper-item-left-title">
                                Оператор
                                </div>
                            </div>
                            <div className="concepts-polytic__wrapper-item-right">
                            Лицо, самостоятельно или совместно с другими лицами определяющее порядок обработки персональных данных
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref3} className="processing-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockRight} alt="icon" className="arrowBlockRight" />
                    <div className="processing-polytic__title">Согласие на обработку ПД</div>
                    <div className="processing-polytic__descr">ВЫ МОЖЕТЕ ДАТЬ согласие на обработку двумя способами:</div>
                    <div className="about-polytic__wrapper">
                        <div className="about-polytic__wrapper-item">
                            <div className="about-polytic__wrapper-item-top">
                                <img src={arrow} alt="icon" />
                                <div>Онлайн</div>
                            </div>
                            <div className="about-polytic__wrapper-item-bottom">
                                <p>Согласие запрашивается при использовании сайта и мобильного приложения <br /> <br /> Вы даёт согласие на обработку персональных данных в ходе заполнения регистрационной формы, делая отметку в соответствующем поле</p>
                            </div>
                        </div>
                        <div className="about-polytic__wrapper-item">
                            <div className="about-polytic__wrapper-item-top">
                                <img src={arrow} alt="icon" />
                                <div>при посещении</div>
                            </div>
                            <div className="about-polytic__wrapper-item-bottom">
                                <p>Согласие запрашивается при личном посещении площадок Гибкого офиса <br /> <br /> Вы даёте согласие в ходе заполнения анкеты на бумажном носителе, подтверждая его своей подписью</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref4} className="processing-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockLeftBottom} alt="icon" className="arrowBlockLeftBottom" />
                    <div className="processing-polytic__title">Ваши права как субъекта ПД</div>
                    <div className="processing-polytic__descr processing-polytic__descr__width">В любой момент, пока мы обрабатываем ваши персональные данные, вы можете воспользоваться следующими правами:</div>
                    <div className="processing-polytic__wrapper">
                        <Block title={'Право на забвение'} descr={'Вы можете запросить удаление данных, которые у нас есть относительно вас, за исключением случаев, когда мы обязаны хранить эти данные по закону'}/>
                        <Block title={'Право на исправление'} descr={'Вы можете попросить нас исправить неточные или неполные персональные данные'}/>
                        <Block title={'Право на отзыв'} descr={'В любой момент вы можете отозвать своё согласие на обработку данных'}/>
                        <Block title={'Право на доступ'} descr={'У вас есть право запросить копию персональных данных, которые у нас есть'}/>
                    </div>
                </div>
                <div ref={ref5} className="interactions-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockLeftBottom} alt="icon" className="arrowBlockLeftBottom2" />
                    <div className="interactions-polytic__title">Взаимодействие с ПД</div>
                    <div className="interactions-polytic__descr">Мы обрабатываем только те персональные данные, которые перечислены в Политике, и необходимы для достижения целей, указанных в Политике</div>
                    <div className="interactions-polytic__text">При этом, мы используем только те категории персональных данных, на обработку которых Клиент дал информированное согласие, то есть:</div>
                    <div className="interactions-polytic__block">
                        <div className="interactions-polytic__block-left">
                            <img src={iIcon} alt="" />
                            <div className="interactions-polytic__block-left-text">Информирование</div>
                            <div className="interactions-polytic__block-left-descr">— Нам нужен ваш номер телефона, для подключения личного кабинета</div>
                            <div className="interactions-polytic__block-left-line"></div>
                        </div>
                        <div className="interactions-polytic__block-middle">
                            <img src={galka} alt="" />
                            <div className="interactions-polytic__block-middle-text">Согласие</div>
                            <div className="interactions-polytic__block-middle-descr">— Хорошо</div>
                            <div className="interactions-polytic__block-middle-line"></div>
                        </div>
                        <div className="interactions-polytic__block-right">
                            Информированное согласие
                        </div>
                    </div>
                    <div className="interactions-polytic__wrapper">
                        <div className="interactions-polytic__wrapper-item">
                            <div className="interactions-polytic__wrapper-item-left">
                                Как дать согласие?
                            </div>
                            <div className="interactions-polytic__wrapper-item-right">
                            Вы можете дать согласие на обработку персональных данных при заполнении форм обратной связи на сайте и иными способами, предусмотренными Политикой
                            </div>
                            <div className="interactions-polytic__wrapper-item-line"></div>
                        </div>
                        <div className="interactions-polytic__wrapper-item">
                            <div className="interactions-polytic__wrapper-item-left">
                            Срок обработки и хранения
                            </div>
                            <div className="interactions-polytic__wrapper-item-right">
                            Обработка и хранение всех полученных персональных данных осуществляется в течение срока, необходимого для достижения цели или до момента отзыва согласия на обработку Клиентом. После достижения соответствующей цели и не позднее 30-ти дней персональные данные подлежат удалению
                            </div>
                            <div className="interactions-polytic__wrapper-item-line"></div>
                        </div>
                        <div className="interactions-polytic__wrapper-item">
                            <div className="interactions-polytic__wrapper-item-left">
                            Уничтожение
                            </div>
                            <div className="interactions-polytic__wrapper-item-right">
                            Уничтожение персональных данных производится их удалением из базы данных CRM-системы
                            </div>
                            <div className="interactions-polytic__wrapper-item-line"></div>
                        </div>
                        <div className="interactions-polytic__wrapper-item">
                            <div className="interactions-polytic__wrapper-item-left">
                            Как мы обрабатываем ПД?
                            </div>
                            <div className="interactions-polytic__wrapper-item-right">
                            Мы обрабатываем персональные данные как в цифровой форме (автоматизировано), так и вручную (без использования средств автоматизации)
                            </div>
                            <div className="interactions-polytic__wrapper-item-line"></div>
                        </div>
                    </div>
                    <div className="interactions-polytic__titleTwo">
                        <h2>пОДРОБНЕЕ О РАБОТЕ С ПД</h2>
                        <div className="interactions-polytic__mobile-dots">
                            <div className="interactions-polytic__mobile-dots-item"></div>
                            <div className="interactions-polytic__mobile-dots-item"></div>
                        </div>
                    </div>
                    <div className="interactions-polytic__mobile" onClick={() => setMobileSwitcherButton(item => !item)}>
                        <img src={mobileSwitcher} alt="icon" className="interactions-polytic__mobile-icon" style={{opacity: mobileSwitcherButton ? '0' : '1'}} />
                        <img src={mobileSwitcherReverse} alt="icon" className="interactions-polytic__mobile-icon" style={{opacity: mobileSwitcherButton ? '1' : '0'}} />
                    </div>
                    <div className="interactions-polytic__wrapperTwo" style={{transform: mobileSwitcherButton ? 'translateX(-340px)' : 'translateX(0px)'}}>
                        <div className="interactions-polytic__wrapperTwo-item">
                            <div className="interactions-polytic__wrapperTwo-item-title">ВИД ПД</div>
                            <div className="interactions-polytic__wrapperTwo-item-title">Категория ПД</div>
                            <div className="interactions-polytic__wrapperTwo-item-title">Цель обработки</div>
                        </div>
                        <div className="interactions-polytic__wrapperTwo-item">
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                    Фамилия, имя, отчество
                                </div>
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                    Мобильный телефон
                                </div>
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                    Электронная почта
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                    Обязательные
                                </div>
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                    Обязательные
                                </div>
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                    Необязательные
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-descr">
                                Предоставление информации об услугах, управление личным кабинетом на сайте и в приложении, идентификация при оплате услуг, при бронировании переговорных комнат и конференц-зала, учёта баланса субъекта ПД и объёма оказываемых услуг Оператором, создание информационных рассылок
                                </div>
                            </div>
                        </div>
                        <div className="interactions-polytic__wrapperTwo-item">
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Изображение субъекта ПД
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Необязательные
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-descr">
                                Управление личным кабинетом на сайте и в приложении, идентификация при оплате услуг, при бронировании переговорных комнат и конференц-зала
                                </div>
                            </div>
                        </div>
                        <div className="interactions-polytic__wrapperTwo-item">
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Паспортные данные
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Собираются только <br /> при посещении коворкинга
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-descr">
                                Обеспечение безопасности при посещении площадки-коворкинга
                                </div>
                            </div>
                        </div>
                        <div className="interactions-polytic__wrapperTwo-item">
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Данные о времени посещения площадки
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Собираются только <br /> при посещении коворкинга
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-descr">
                                Учёт времени посещения площадки
                                </div>
                            </div>
                        </div>
                        <div className="interactions-polytic__wrapperTwo-item">
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Обезличенные технические данные (действия пользователей на сайте)
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-text">
                                Обезличенные данные собираются с помощью стороннего сервиса «Яндекс Метрика»
                                </div>
                            </div>
                            <div className="interactions-polytic__wrapperTwo-item-block">
                                <div className="interactions-polytic__wrapperTwo-item-block-descr">
                                Обезличенный статистический учёт объёма действующих клиентов и спроса на услуги
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="interactions-polytic__wrapperThree">
                        <div className="interactions-polytic__wrapperThree-item">
                            <div className="interactions-polytic__wrapperThree-item-title">
                            Способ обработки
                            </div>
                            <div className="interactions-polytic__wrapperThree-item-descr">
                            Обработка персональных данных может осуществляться смешанным способом: путём сбора, записи, систематизации, накопления, хранения, уточнения (обновления, изменения), извлечения, использования, обезличивания, удаления, уничтожения
                            </div>
                        </div>
                        <div className="interactions-polytic__wrapperThree-item">
                            <div className="interactions-polytic__wrapperThree-item-title">
                            Место хранения
                            </div>
                            <div className="interactions-polytic__wrapperThree-item-descr">
                            База данных CRM-системы (Отдельная База Данных в составе СУБД PostgreSQL).Данные попадают в место хранения напрямую с сайта/мобильного приложения. На сайт устанавливаются специальные компоненты «виджеты», являющиеся частью SP, основанные на Веб технологии iFrame. При вводе информация попадает на сервер SP через REST API, используя протокол HTTPS
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref6} className="defense-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockLeft} alt="icon" className="arrowBlockLeft" />
                    <div className="defense-polytic__title">Защита ПД</div>
                    <div className="interactions-polytic__wrapper-item">
                        <div className="interactions-polytic__wrapper-item-left">
                        NDA и Локализация данных
                        </div>
                        <div className="interactions-polytic__wrapper-item-right">
                        Мы защищаем персональные данные, которые у нас хранятся, от разглашения, полной или частичной утраты, а также несанкционированного доступа со стороны третьих лиц. В частности, в отношениях с сотрудниками и контрагентами, мы оформляем NDA (соглашение о неразглашении), также соблюдаем требования о локализации данных, то есть о хранении ПД на территории Российской Федерации
                        </div>
                        <div className="interactions-polytic__wrapper-item-line"></div>
                    </div>
                    <div className="interactions-polytic__wrapper-item">
                        <div className="interactions-polytic__wrapper-item-left">
                        Как мы защищаем данные?
                        </div>
                        <div className="interactions-polytic__wrapper-item-right">
                        Защита ПД осуществляется как посредством физической защиты, так и техническими средствами
                        </div>
                        <div className="interactions-polytic__wrapper-item-line"></div>
                    </div>
                    <Defense title={'ФИЗИЧЕСКАЯ ЗАЩИТА'} text1={'Расположение ЦОД-а на охраняемой территории'} text2={'Регламентированный доступ к объектам ЦОД со стороны сотрудников'} text3={'Системы сигнализации при несанкционированном физическом доступе к оборудованию'}/>
                    <Defense title={'ТЕХНИЧЕСКИЕ СРЕДСТВА'} text1={'Средства блокирования атак (межсетевые экраны)'} text2={'Средства поиска уязвимостей (сканеры безопасности)'} text3={'Аутентификация пользователей при доступе к программе'} text4={'Разграничение уровней доступа к данным в рамках программы'} text5={'Повышенный контроль доступа к базам данных'} text6={'Использование безопасных соединений (SSL, TLS) и IPsec при передаче информации между компонентами системы'}/>
                    <div className="interactions-polytic__wrapper-item">
                        <div className="interactions-polytic__wrapper-item-left">
                        Третьи лица
                        </div>
                        <div className="interactions-polytic__wrapper-item-right">
                        Мы не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, когда такая обязанность установлена законом
                        </div>
                        <div className="interactions-polytic__wrapper-item-line"></div>
                    </div>
                    <div className="defense-polytic__itemTwo">
                        <div className="defense-polytic__itemTwo-left">Если происходит утечка персональных данных, то мы:</div>
                        <div className="defense-polytic__itemTwo-right">
                                <div className="defense-polytic__itemTwo-right-left">
                                    <img src={hz} alt="icon" />
                                    <div className="defense-polytic__itemTwo-right-left-title">В течение 24 часов</div>
                                    <div className="defense-polytic__itemTwo-right-left-descr">Уведомляем <br /> 
Роскомнадзор</div>
                                    <div className="defense-polytic__itemTwo-right-left-descr defense-polytic__itemTwo-right-left-descr-mobile">Уведомляем Роскомнадзор</div>
                                    <div className="defense-polytic__itemTwo-right-left-line"></div>
                                </div>
                                <div className="defense-polytic__itemTwo-right-right">
                                    <img src={lupa} alt="icon" />
                                    <div className="defense-polytic__itemTwo-right-right-title">В течение 72 часов</div>
                                    <div className="defense-polytic__itemTwo-right-right-descr">Проводим собственное 
расследование и уведомляем 
Роскомнадзор о его результатах</div>
<div className="defense-polytic__itemTwo-right-right-line"></div>

                                </div>
                        </div>
                    </div>
                </div>
                <div ref={ref7} className="change-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockLeftBottom} alt="icon" className='arrowBlockLeftBottom2' />
                    <div className="change-polytic__title">Изменение политики</div>
                    <div className="change-polytic__text">Мы оставляем за собой право изменять, 
                    добавлять или удалять части этой Политики 
                    в любое время и по собственному усмотрению</div>
                    <div className="change-polytic__descr">В случае внесения каких-либо существенных изменений в эту Политику, мы уведомим вас о таких изменениях</div>
                    <div className="change-polytic__wrapper">
                        <div className="change-polytic__wrapper-item">Разместив их на сайте knwh.ru</div>
                        <img src={palka} alt="icon" />
                        <div className="change-polytic__wrapper-item">Или отправив вам <br />
электронное письмо</div>
<img src={palka} alt="icon" />
                        <div className="change-polytic__wrapper-item">Или другое уведомление, согласно применимому законодательству</div>
                    </div>
                    <div className="its-polytic__top-right-middle its-polytic__top-right-middle-mobile">
                        <div className="its-polytic__top-right-middle-item">
                            <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                            <div className="its-polytic__top-right-middle-item-text">ООО «РС Павелецкая» ИНН: 9725027581</div>
                        </div>
                        <div className="its-polytic__top-right-middle-item">
                            <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                            <div className="its-polytic__top-right-middle-item-text">ООО «РС Балчуг» ИНН: 9705123030</div>
                        </div>
                        <div className="its-polytic__top-right-middle-item">
                            <img src={arrow} alt='icon' className="its-polytic__top-right-middle-item-icon"/>
                            <div className="its-polytic__top-right-middle-item-text">ООО «Смарт Офис» ИНН: 9705174676.</div>
                        </div>
                    </div>
                </div>
                <div ref={ref8} className="operators-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <img src={arrowBlockLeft} alt="icon" className='arrowBlockLeft'/>
                    <div className="operators-polytic__title">Операторы персональных данных</div>
                    <div className="operators-polytic__descr">Сеть гибких офисов «KNOW WHERE» функционирует на двух площадках</div>
                    <div className="operators-polytic__wrapper">
                        <div className="operators-polytic__wrapper-item">
                            <div className="operators-polytic__wrapper-item-title">Black</div>
                            <div className="operators-polytic__wrapper-item-descr">Администрируется ООО «РС Павелецкая»</div>
                            <Link to='/black' className="operators-polytic__wrapper-item-img">
                                <img className='foto' src={img1} alt="img" />
                                <div className="operators-polytic__wrapper-item-img-hover">
                                    <div className="operators-polytic__wrapper-item-img-hover-text">
                                    Посмотреть площадку
                                    </div>
                                 <img src={arrowWhite} alt="icon" />
                                </div>
                            </Link>
                        </div>
                        <div className="operators-polytic__wrapper-item">
                            <div className="operators-polytic__wrapper-item-title">Balchug</div>
                            <div className="operators-polytic__wrapper-item-descr">Администрируется ООО «Смарт Офис» и ООО «РС Балчуг»</div>
                            <Link to='/balchug' className="operators-polytic__wrapper-item-img">
                                <img className='foto' src={img2} alt="img" />
                                <div className="operators-polytic__wrapper-item-img-hover">
                                    <div className="operators-polytic__wrapper-item-img-hover-text">
                                    Посмотреть площадку
                                    </div>
                                 <img src={arrowWhite} alt="icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="operators-polytic__wrapperTwo">
                        <div className="operators-polytic__wrapperTwo-left">В качестве Операторов в равной степени выступают все названные общества</div>
                        <div className="operators-polytic__wrapperTwo-right">
                            <div className="operators-polytic__wrapperTwo-right-top">
                                <div className="operators-polytic__wrapperTwo-right-top-item">
                                    <img src={arrow} alt="icon" />
                                    <div className="operators-polytic__wrapperTwo-right-top-item-text">
                                    ООО «РС Павелецкая» ИНН: 9725027581
                                    </div>
                                </div>
                                <div className="operators-polytic__wrapperTwo-right-top-item">
                                    <img src={arrow} alt="icon" />
                                    <div className="operators-polytic__wrapperTwo-right-top-item-text">
                                    ООО «РС Балчуг» ИНН: 9705123030
                                    </div>
                                </div>
                                <div className="operators-polytic__wrapperTwo-right-top-item">
                                    <img src={arrow} alt="icon" />
                                    <div className="operators-polytic__wrapperTwo-right-top-item-text">
                                    ООО «Смарт Офис» ИНН: 9705174676
                                    </div>
                                </div>
                            </div>
                            <div className="operators-polytic__wrapperTwo-right-bottom">
                            Для эффективной работы сети необходима возможность взаимной передачи персональных данных Клиентов внутри сети, поэтому между Операторами даны Поручения на обработку персональных данных
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={ref9} className="contact-polytic">
                    <img className='about-polytic__arrow about-polytic__arrow-mobile' src={arrow3} alt="icon" />
                    <div className="contact-polytic__title">Как с нами связаться?</div>
                    <div className="contact-polytic__wrapper">
                        <div className="contact-polytic__wrapper-descr">
                            <div>По любым вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам</div>
                            <Link to='/'>Вернуться к выбору раздела<img src={arrow4} alt="icon" /></Link>
                        </div>
                        <div className="contact-polytic__wrapper-right">
                            <div className="contact-polytic__wrapper-right-buttons">
                                <div className="contact-polytic__wrapper-right-buttons-item">Электронная почта</div>
                                <div className="contact-polytic__wrapper-right-buttons-item">Telegram</div>
                            </div>
                            <ul className="contact-polytic__wrapper-right-mail">
                                <div>
                                    <div className="contact-polytic__wrapper-right-buttons-item contact-polytic__wrapper-right-buttons-item-mobile">Электронная почта</div>
                                    <li className="contact-polytic__wrapper-right-mail-item"><a target='_blank' href="mailto:hello@knwh.ru">hello@knwh.ru</a></li>
                                    <li className="contact-polytic__wrapper-right-mail-item"><a target='_blank' href="mailto:lawyer@knwh.ru">lawyer@knwh.ru</a></li>
                                    <li className="contact-polytic__wrapper-right-mail-item"><a target='_blank' href="mailto:law@knwh.ru">law@knwh.ru</a></li>
                                </div>
                                <div className="contact-polytic__wrapper-right-buttons-item contact-polytic__wrapper-right-buttons-item-mobile">Telegram</div>
                                <li className="contact-polytic__wrapper-right-mail-item"><a target='_blank' href="https://t.me/knwh_cowork">@knwh_cowork</a></li>
                            </ul>
                            <div className="contact-polytic__wrapper-right-dev">
                                <div className="contact-polytic__wrapper-right-dev-item">
                                Политику разработали:  <br />
<a href='https://t.me/douborn'>Иван Хамидуллин</a> , <a href='https://t.me/jujuleee'>Юлия Чепурнова</a> 
                                </div>
                                <div className="contact-polytic__wrapper-right-dev-item">
                                Дизайн: <br />
<a href='https://t.me/Yakowst'>Яков Ступницкий</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Block = ({title, descr}) => {
    const [openD, setOpenD] = useState(false)

    const descrOpen = () => {
        setOpenD(openD => !openD)
    }

    return (
    <div onClick={() => descrOpen()} className="processing-polytic__wrapper-item">
        <div className="processing-polytic__wrapper-item-line"></div>

        <div className="processing-polytic__wrapper-item-top">
            <div className="processing-polytic__wrapper-item-top-title">
                {title}
            </div>
            <div className="processing-polytic__wrapper-item-top-icon" style={{background: openD ? '#B3A16E' : 'transparent'}}>
                <img src={arrowTop} alt="icon"  style={{transform: openD ? 'rotate(0deg) translate(-50%, -50%)' : 'rotate(-180deg) translate(50%, 50%)', filter: openD ? 'invert(100%) sepia(0%) saturate(20%) hue-rotate(48deg) brightness(50%) contrast(105%)' : ''}}/>
            </div>
        </div>
        <div style={{display: openD ? 'flex' : 'none'}} className="processing-polytic__wrapper-item-descr">
        {descr}
        </div>
    </div>
    )
}

const Defense = ({title, text1, text2, text3, text4, text5, text6}) => {
    const [openD, setOpenD] = useState(false)

    const descrOpen = () => {
        setOpenD(openD => !openD)
    }
    return (
        <div style={{cursor: 'pointer'}} className="defense-polytic__item">
        <div onClick={() => descrOpen()} className="defense-polytic__item-top">
            <div className="defense-polytic__item-top-title">{title}</div>
            <div className="defense-polytic__item-top-icon" style={{background: openD ? '#B3A16E' : 'transparent'}}>
                <img src={arrowTop} alt="icon" style={{transform: openD ? 'rotate(0deg) translate(-50%, -50%)' : 'rotate(-180deg) translate(50%, 50%)', filter: openD ? 'invert(100%) sepia(0%) saturate(20%) hue-rotate(48deg) brightness(50%) contrast(105%)' : ''}}/>
            </div>
            <div className="defense-polytic__item-top-line"></div>
        </div>
        <ul style={{display: openD ? 'flex' : 'none'}} className="defense-polytic__item-info">
            <li className="defense-polytic__item-info-item">
            {text1}
            </li>
            <li className="defense-polytic__item-info-item">
            {text2}
            </li>
            <li className="defense-polytic__item-info-item">
            {text3}
            </li>
            <li style={{display: text4 ? '' : 'none'}} className="defense-polytic__item-info-item">
            {text4}
            </li>
            <li style={{display: text4 ? '' : 'none'}} className="defense-polytic__item-info-item">
            {text5}
            </li>
            <li style={{display: text4 ? '' : 'none'}} className="defense-polytic__item-info-item">
            {text6}
            </li>
        </ul>
    </div>
    )
}

const Res = () => {
    const windowInnerWidth = document.documentElement.clientWidth;
    if (windowInnerWidth >= 500) {
        return (
            <>О чем эта политика?</>
        )
    } else {
        return (
            <>О чем эта <br /> политика?</>
        )
    }
}



export default Polityc;