import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Parallax } from "swiper";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/free-mode";

import SliderBlack from "../../components/sliderBlack/SliderBlack";
import SliderRooms from "../../components/sliderRooms/SliderRooms";
import ServicesBlock from "../../components/servicesBlock/ServicesBlock";
import RatesItem from "../../components/ratesItem/RatesItem";
import Applications from "../../components/applications/Applications";
import ImagesItem from "../../components/imagesItem/ImagesItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./balchug.scss";

import clock from "../services/icons/clock.svg";
import wifi from "../services/icons/wifi.svg";
import technic from "../services/icons/technic.svg";
import zone from "../services/icons/zone.svg";
import coffee from "../services/icons/coffee.svg";
import cofee2 from "../services/icons/cofee2.svg";
import call from "../services/icons/call.svg";
import paper from "../services/icons/paper.svg";
import cleener from "../services/icons/cleener.svg";
import item from "../services/icons/item.svg";
import table from "../services/icons/table.svg";
import замок from "../services/icons/замок.svg";
import кран from "../services/icons/кран.svg";
import defend from "../services/icons/defend.svg";

// import wifi from '../../ui/icons/servicesBlock/wifi.svg';
// import utilities from '../../ui/icons/servicesBlock/utilities.svg';
// import reseption from '../../ui/icons/servicesBlock/reseption.svg'
// import passes from '../../ui/icons/servicesBlock/passes.svg';
// import papers from '../../ui/icons/servicesBlock/papers.svg';
// import mobile from '../../ui/icons/servicesBlock/mobile.svg';
// import furniture from '../../ui/icons/servicesBlock/furniture.svg';
// import equipment from '../../ui/icons/servicesBlock/equipment.svg';
// import defend from '../../ui/icons/servicesBlock/defend.svg';
// import cup from '../../ui/icons/servicesBlock/cup.svg';
// import coffee from '../../ui/icons/servicesBlock/coffee.svg';
// import clock from '../../ui/icons/servicesBlock/clock.svg';
// import cleaner from '../../ui/icons/servicesBlock/cleaner.svg';
// import bedroom from '../../ui/icons/servicesBlock/bedroom.svg';

import imagesSlides1 from "./img/1.png";
import imagesSlides2 from "./img/2.png";
// import imagesSlides3 from './img/3.png'
import imagesSlides4 from "./img/4.png";
import imagesSlides5 from "./img/5.png";
import imagesSlides6 from "./img/6.png";
import imagesSlides7 from "./img/7.png";
// import imagesSlides8 from './img/8.png'
import imagesMobile1 from "./img/mobile/1.png";
import imagesMobile2 from "./img/mobile/2.png";
import imagesMobile3 from "./img/mobile/3.png";
import imagesMobile4 from "./img/mobile/4.png";
import imagesMobile5 from "./img/mobile/5.png";
import imagesMobile6 from "./img/mobile/6.png";
import imagesMobile7 from "./img/mobile/7.png";
import imagesMobile8 from "./img/mobile/8.png";
import bulchugSliderImg1 from "./img/slider/1.jpg";
import bulchugSliderImg2 from "./img/slider/2.jpg";
import bulchugSliderImg3 from "./img/slider/3.jpg";
import bulchugRoomsImg1 from "./img/rooms/1.png";
import bulchugRoomsImg2 from "./img/rooms/2.png";
import bulchugRoomsImg3 from "./img/rooms/3.png";
import bulchugRoomsImg4 from "./img/rooms/4.png";
import bulchugRoomsImg5 from "./img/rooms/5.png";
import bulchugRoomsImg6 from "./img/rooms/6.png";
import стол from "./img/icons/стол.svg";
import дом from "./img/icons/дом.svg";
import проектор from "./img/icons/проектор.svg";
import тв from "./img/icons/тв.svg";
import union from "./img/icons/union.svg";
import стул from "./img/icons/стул.svg";
import telegram from "../../ui/icons/footer/telegram.svg";
import vk from "../../ui/icons/footer/vk.svg";
import market from "../../ui/icons/footer/market.svg";
import store from "../../ui/icons/footer/store.svg";
import logoBg from "../../ui/icons/logoBgFront.png";

import FlipSlider from "../../components/flipSlider/FlipSlider";
import FilterRooms from "../../components/filterRooms/FilterRooms";
import Footer from "../../components/footer/Footer";
import { useEffect } from "react";

const Balchug = ({ setForm }) => {
    const [flip, setFlip] = useState(0);
    const windowInnerWidth = document.documentElement.clientWidth;
    const rooms = [
        {
            img: "img",
            title: "ДЖАККУ",
            descr: "м. Павелецкая Кожевническая улица, 14",
            price: "2500₽ / час",
            menu: [
                { icon: "icon", title: "8 посадочных мест" },
                { icon: "icon", title: "Общий стол" },
                { icon: "icon", title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: "icon",
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
        },
    ];
    const service = [
        { icon: clock, title: "Доступ 24/7" },
        { icon: wifi, title: "безлимитный интернет" },
        { icon: technic, title: "оборудованные переговорки" },
        { icon: zone, title: "мягкие зоны" },
        { icon: coffee, title: "ОБОРУДОВАННЫЕ КУХНИ" },
        { icon: cofee2, title: "ВОДА, ЧАЙ, КОФЕ" },
        { icon: call, title: "телефонные будки" },
        { icon: paper, title: "принтер и расходники" },
        { icon: cleener, title: "Уборка" },
        { icon: item, title: "Услуги ресепшн" },
        { icon: table, title: "мебель: кресла, столы" },
        { icon: замок, title: "СКУД, пропуска от коворкинга" },
        { icon: кран, title: "коммунальные услуги" },
        { icon: defend, title: "круглосуточная охрана" },
    ];
    const balchugTarif = [
        {
            title: "День",
            list: [
                { title: "Свободное рабочее место" },
                { title: "Вода, чай и кофе" },
                { title: "Принтер и сканер" },
                { title: "Кухня и душевые" },
                { title: "Доступ 24/7" },
            ],
            listTwo: [
                { title: "Свободное рабочее место" },
                { title: "Вода, чай и кофе" },
                { title: "Принтер и сканер" },
                { title: "Кухня и душевые" },
                { title: "Доступ 24/7" },
            ],
            buttons: [
                { title: "1 день" },
                { title: "10 дней" },
                { title: "25 дней" },
            ],
            price: "1 390₽",
            price1: "11 900₽",
            price2: "28 250₽",
            href: "SpaceinWidget.run('ddc6aef0-3f36-4a7a-8d51-4e107502841a');",
            href1: "SpaceinWidget.run('0ac8ceef-a349-43ea-a902-fc2de129d1b0');",
            href2: "SpaceinWidget.run('ca9c54d5-ac78-4849-a48d-6490c131f836');",
            hint: "",
            hint1: "*Срок действия – 60 дней",
            hint2: "*Срок действия – 120 дней",
        },
        {
            title: "Гость",
            list: [
                { title: "Свободное рабочее место" },
                { title: "Вода, чай и кофе" },
                { title: "Принтер и сканер" },
                { title: "Кухня и душевые" },
                { title: "Доступ 24/7" },
                { title: "1 час любой переговорной комнаты" },
            ],
            listTwo: [
                { title: "Свободное рабочее место" },
                { title: "Вода, чай и кофе" },
                { title: "Принтер и сканер" },
                { title: "Кухня и душевые" },
                { title: "Доступ 24/7" },
                { title: "5 часов любой переговорной комнаты" },
                { title: "30% скидка на аренду переговорных комнат" },
            ],
            buttons: [{ title: "Неделя" }, { title: "Месяц" }],
            price: "8 900₽",
            price1: "21 900₽",
            href: "SpaceinWidget.run('bf2eec79-8926-40b9-8d9d-23a395128825');",
            href1: "SpaceinWidget.run('bd4b030c-3522-458b-9a37-6200c4d7c44b');",
        },
        {
            title: "Резидент",
            list: [
                { title: "Фиксированное рабочее место" },
                { title: "Вода, чай и кофе" },
                { title: "Принтер и сканер" },
                { title: "Кухня и душевые" },
                { title: "Доступ 24/7" },
                { title: "10 часов любой переговорной комнаты" },
                { title: "50% скидка на аренду переговорных" },
            ],
            listTwo: [
                { title: "Фиксированное рабочее место" },
                { title: "Вода, чай и кофе" },
                { title: "Принтер и сканер" },
                { title: "Кухня и душевые" },
                { title: "Доступ 24/7" },
                { title: "10 часов любой переговорной комнаты" },
                { title: "50% скидка на аренду переговорных" },
            ],
            buttons: [{ title: "1 месяц" }, { title: "3 месяца" }],
            price: "24 900₽",
            price1: "68 700₽",
            href: "SpaceinWidget.run('501e3c77-047e-43db-a8e9-bc7bd4f3fd9a');",
            href1: "SpaceinWidget.run('c5c84909-29c7-4fb4-915b-536241f74f03');",
        },
    ];
    const image = [
        { img: imagesSlides1 },
        { img: imagesSlides2 },
        // {img: imagesSlides3},
        { img: imagesSlides4 },
        { img: imagesSlides5 },
        { img: imagesSlides6 },
        { img: imagesSlides7 },
        // {img: imagesSlides8},
    ];
    const image2 = [
        { img: imagesMobile1 },
        { img: imagesMobile2 },
        { img: imagesMobile3 },
        { img: imagesMobile4 },
        { img: imagesMobile5 },
        { img: imagesMobile6 },
        { img: imagesMobile7 },
        { img: imagesMobile8 },
    ];
    const sliderBulchugImg = [
        { img: bulchugSliderImg1 },
        { img: bulchugSliderImg2 },
        { img: bulchugSliderImg3 },
    ];
    const bulchugRoomsArr = [
        {
            img: bulchugRoomsImg1,
            name: "Трасса №40",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "6 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами" },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "2000₽ / час",
            href: "SpaceinWidget.run('ff210f96-4c91-433f-922d-d056bb1a2fd3');",
            places: "6",
        },
        {
            img: bulchugRoomsImg2,
            name: "КОНФЕРЕНЦ-ЗАЛ",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "65 посадочных мест" },
                { icon: union, title: "Проектор и звуковая система" },
                { icon: стул, title: "Кресла для выступающих" },
                { icon: проектор, title: "Флипчарт с маркерами " },
            ],
            price: "9000₽ / час",
            href: "SpaceinWidget.run('9e0fe44c-8f7f-4463-9c55-20388f7c06db');",
            places: "65",
        },
        {
            img: bulchugRoomsImg3,
            name: "МИЛФОРД",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "12 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 75”" },
            ],
            price: "4000₽ / час",
            href: "SpaceinWidget.run('c7d0a8af-984d-4268-83f7-8e831ce74ccf');",
            places: "12",
        },
        {
            img: bulchugRoomsImg4,
            name: "ХАЙВАН",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('5e7d26b2-5d9b-4b48-a096-813ab767dc35');",
            places: "8",
        },
        {
            img: bulchugRoomsImg5,
            name: "АМАЛЬФИ",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('186ee6f7-44a0-4060-98df-89ca4e4548d9');",
            places: "8",
        },
        {
            img: bulchugRoomsImg6,
            name: "ТРАНСФЭГЕРАШСКОЕ ШОССЕ",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('3486e7ce-0b4a-4cb5-9f00-86468bbc3d6c');",
            places: "8",
        },
    ];
    const [filter, setFilter] = useState(bulchugRoomsArr);

    const tarifs = balchugTarif.map(
        (
            {
                title,
                list,
                listTwo,
                buttons,
                price,
                price1,
                price2,
                href,
                href1,
                href2,
                hint,
                hint1,
                hint2,
            },
            i
        ) => {
            return (
                <RatesItem
                    title={title}
                    list={list}
                    listTwo={listTwo}
                    buttons={buttons}
                    price={price}
                    price1={price1}
                    price2={price2}
                    href={href}
                    href1={href1}
                    href2={href2}
                    hint={hint}
                    hint1={hint1}
                    hint2={hint2}
                    key={i}
                />
            );
        }
    );
    const services = service.map(({ icon, title }, i) => {
        if (windowInnerWidth <= 900) {
            return (
                <SwiperSlide>
                    <ServicesBlock icon={icon} title={title} key={i} />
                </SwiperSlide>
            );
        } else {
            return (
                <ServicesBlock icon={icon} title={title} key={i} translate={flip} />
            );
        }
    });
    const images = image.map(({ img }, i) => {
        return (
            // <SwiperSlide>
            <ImagesItem img={img} key={i} />
            // </SwiperSlide>
        );
    });
    const images2 = image2.map(({ img }, i) => {
        return (
            <SwiperSlide>
                <ImagesItem img={img} key={i} />
            </SwiperSlide>
        );
    });

    const countPounts = windowInnerWidth / 388;
    const countPounts1 = windowInnerWidth / 250;
    const countPounts2 = windowInnerWidth / (1192 - 280 - 20);
    const countPounts3 = windowInnerWidth / (403 - 90 - 20);

    let itemsAll = service.length;
    let itemsTranslate = itemsAll / 4;
    let translate = 368 * itemsTranslate;
    let translate1440 = 285 * itemsTranslate;
    const flipLeft = () => {
        if (windowInnerWidth > 1440) {
            if (flip <= -3864) {
                setFlip(0);
            } else {
                setFlip((flip) => flip - translate);
            }
        } else {
            if (flip <= -2980) {
                setFlip(0);
            } else {
                setFlip((flip) => flip - translate1440);
            }
        }
    };
    const flipRight = () => {
        if (windowInnerWidth > 1440) {
            if (flip >= 0) {
                setFlip(0);
            } else {
                setFlip((flip) => flip + translate);
            }
        } else {
            if (flip >= 0) {
                setFlip(0);
            } else {
                setFlip((flip) => flip + translate1440);
            }
        }
    };

    const option = [
        { name: "Все" },
        { name: "до 65 мест" },
        { name: "до 12 мест" },
        { name: "до 8 мест" },
        { name: "до 6 мест" },
    ];

    const newFilter = (name) => {
        if (name === "Все") {
            setFilter(bulchugRoomsArr);
        } else if (name === "до 65 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "65";
            });
            setFilter(filtered);
        } else if (name === "до 12 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "12";
            });
            setFilter(filtered);
        } else if (name === "до 8 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "8";
            });
            setFilter(filtered);
        } else if (name === "до 6 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "6";
            });
            setFilter(filtered);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 11,
        autoplay: true,
        speed: 60000,
        autoplaySpeed: 10,
        cssEase: "linear",
        variableWidth: true,
        rows: 1,
        arrows: false,
    };

    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 11,
        autoplay: true,
        speed: 60000,
        autoplaySpeed: 10,
        cssEase: "linear",
        variableWidth: true,
        rows: 1,
        arrows: false,
        rtl: true,
    };

    useEffect(() => {
        const script = document.createElement("script");

        script.id = "amoforms_script_1097986";
        script.src =
            "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    //   useEffect(() => {
    //     const script = document.createElement('script');

    //     script.id = "amoforms_script_947509";
    //     script.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //       }
    //   }, []);

    //   useEffect(() => {
    //     const script = document.createElement('script');

    //     script.id = "amoforms_script_1097978";
    //     script.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //         document.body.removeChild(script);
    //       }
    //   }, [])

    return (
        <>
            <section className="meeting-rooms meeting-rooms__balchug">
                <img className="logo-bg" src={logoBg} alt="logo" />
                <div className="container">
                    <div className="black__header black__header__balchug">
                        <div className="black__left">
                            <h1 className="black__title black__title__balchug">balchug</h1>
                            <p className="black__descr black__descr__balchug">
                                Гибкий офис BALCHUG сочетает в себе все преимущества отдельно
                                стоящего здания, эстетку тихой набережной Москвы-реки
                                и качественный сервис. <br /> <br /> Кроме оборудованных
                                переговорных комнат, на территории пространства можете
                                забронировать конференц-зал на 60 мест. В тёплое время года на 5
                                этаже открыта меблированная терраса.
                            </p>
                        </div>
                        <div className="black__right black__right__balchug">
                            м. Новокузнецкая <br />
                            Садовническая наб., 9 <br />
                            +7 (499) 647-85-63
                        </div>
                    </div>
                </div>
                <SliderBlack bg={sliderBulchugImg} />
                <div className="container services__container-black">
                    <div className="services__header">
                        <div className="services__title">услуги</div>
                        <p className="services__descr">
                            В гибких офисах KNOW WHERE предусмотрены удобства и услуги для
                            вашего комфорта
                        </p>
                    </div>
                    <div
                        className="services__wrapper "
                    // style={{transform: `translateX(${mouseCoordinates}px)`, userSelect: 'none'}}
                    >
                        {windowInnerWidth <= 900 ? (
                            <Swiper
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode]}
                                className="mySwiper"
                                spaceBetween={40}
                                breakpoints={{
                                    1: {
                                        slidesPerView: countPounts1,
                                    },
                                    980: {
                                        slidesPerView: countPounts,
                                    },
                                    1480: {
                                        slidesPerView: 3.95,
                                    },
                                }}
                            >
                                {services}
                            </Swiper>
                        ) : (
                            services
                        )}
                    </div>
                    <FlipSlider
                        onClickRight={() => flipRight()}
                        onClickLeft={() => flipLeft()}
                        translate={flip}
                        number25={0}
                        number50={windowInnerWidth > 1440 ? -1288 : -998}
                        number75={windowInnerWidth > 1440 ? -2576 : -1995}
                        number100={windowInnerWidth > 1440 ? -3864 : -2993}
                        style={"news"}
                    />
                </div>
            </section>

            {/* <section className='services services__balchug'>

            </section> */}
            <section className="rates rates__balchug">
                <div className="container">
                    <div className="rates__header rates__header__balchug">
                        <div className="rates__header-left">
                            <h2 className="rates__header-title">ТАРИФЫ</h2>
                            <p className="rates__header-descr">Найдите ваш идеальный тариф</p>
                        </div>
                    </div>
                    <div className="rates__wrapper">{tarifs}</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Applications
                            title="посмотрите вживую"
                            descr="Выберите кабинет, который подойдёт именно вашей команде"
                            // additionally={"Будьте в числе первых!"}
                            // additionally2={
                            //   "*акция действует до 31.01 включительно. *при единовременной оплате 2-х месяцев."
                            // }
                            button="Записаться"
                            setForm={setForm}
                        />
                    </div>
                </div>
            </section>
            <section className="images images__balchug">
                <div className="container">
                    <div className="images__header">
                        <h2 className="images__title">Общие зоны</h2>
                        <p className="images__descr">
                            Зоны отдыха BALCHUG оборудованы мягкой мебелью для вашего
                            комфорта. В тёплое время года открыта мебелированная терраса
                            с видом на Москва-реку.
                        </p>
                    </div>
                    <div className="images__wrapper">
                        {/* {windowInnerWidth < 560 ? 
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                            spaceBetween={0}
                            breakpoints={{
                                1: {
                                    slidesPerView: countPounts3
                                },
                                560: {
                                    slidesPerView: countPounts2
                                },
                                980: {
                                    slidesPerView: countPounts2
                                },
                                1480: {
                                    slidesPerView: 1.68
                                }
                            }}
                        >
                            {images2}
                        </Swiper>
                        :
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode]}
                            className="mySwiper"
                            spaceBetween={0}
                            breakpoints={{
                                1: {
                                    slidesPerView: countPounts1
                                },
                                560: {
                                    slidesPerView: countPounts2
                                },
                                980: {
                                    slidesPerView: countPounts2
                                },
                                1480: {
                                    slidesPerView: 1.68
                                }
                            }}
                            
                            
                        >
                            {images}
                        </Swiper>
                        } */}
                        {windowInnerWidth < 560 ? (
                            <>
                                <Slider {...settings}>{images2}</Slider>
                                <Slider {...settings2}>{images2}</Slider>
                            </>
                        ) : (
                            <Slider {...settings}>{images}</Slider>
                        )}
                    </div>
                </div>
                <div className="container">
                    <div className="meeting-rooms__header">
                        <div className="meeting-rooms__header-left">
                            <h2 className="meeting-rooms__title meeting-rooms__title__balchug">
                                переговорные
                            </h2>
                            <p className="meeting-rooms__descr meeting-rooms__descr__balchug">
                                Комфортабельные ПК со всем необходимым для продуктивных встреч
                            </p>
                        </div>
                        <div className="meeting-rooms__header-right">
                            <FilterRooms
                                onClick={newFilter}
                                option={option}
                                style={"bulchug"}
                            />
                        </div>
                    </div>
                </div>
                <SliderRooms
                    styles={"room__wrapper__balchug"}
                    color={"balchug__color"}
                    border={"balchug__border"}
                    arr={filter}
                    clame={"carousel__black-new"}
                />
            </section>
            <Footer style={"footer__white"} />
        </>
    );
};

export default Balchug;
