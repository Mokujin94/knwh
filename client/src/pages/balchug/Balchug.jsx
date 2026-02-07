import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/free-mode";

import SliderBlack from "../../components/sliderBlack/SliderBlack";
import SliderRooms from "../../components/sliderRooms/SliderRooms";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import RatesItem from "../../components/ratesItem/RatesItem";
import Applications from "../../components/applications/Applications";
import ImagesItem from "../../components/imagesItem/ImagesItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./balchug.scss";

import { balchugTarif } from "../../data/tariffs";
import { bulchugRoomsArr } from "../../data/rooms";
import { servicesArray } from "../../data/services";


import imagesSlides1 from "./img/1.png";
import imagesSlides2 from "./img/2.png";
import imagesSlides4 from "./img/4.png";
import imagesSlides5 from "./img/5.png";
import imagesSlides6 from "./img/6.png";
import imagesSlides7 from "./img/7.png";
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

import logoBg from "../../ui/icons/logoBgFront.png";

import FlipSlider from "../../components/flipSlider/FlipSlider";
import FilterRooms from "../../components/filterRooms/FilterRooms";
import Footer from "../../components/footer/Footer";

const Balchug = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
    const [filter, setFilter] = useState(bulchugRoomsArr);

    const windowInnerWidth = document.documentElement.clientWidth;

    const image = [
        { img: imagesSlides1 },
        { img: imagesSlides2 },
        { img: imagesSlides4 },
        { img: imagesSlides5 },
        { img: imagesSlides6 },
        { img: imagesSlides7 },
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

    const tarifs = balchugTarif.map(
        ( tariff, i ) => {
            return (
                <RatesItem
                   tariff={tariff}
                    setForm={setForm}
                    setActiveMail={setActiveMail}
                    setDefaultRate={setDefaultRate}
                    setActiveRate={setActiveRate}
                    key={i}
                />
            );
        }
    );

    const images = image.map(({ img }, i) => {
        return (
            <ImagesItem img={img} key={i} />
        );
    });

    const images2 = image2.map(({ img }, i) => {
        return (
            <SwiperSlide>
                <ImagesItem img={img} key={i} />
            </SwiperSlide>
        );
    });

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
                <ServicesSlider services={servicesArray} pagesStyle={"news"} />
                {/* <div className="container services__container-black">
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
                </div> */}
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
                    roomsType={"Balchug"}
                    setForm={setForm}
                    setActiveMail={setActiveMail}
                    setDefaultRate={setDefaultRate}
                    setActiveRate={setActiveRate}
                />
            </section>
            <Footer style={"footer__white"} />
        </>
    );
};

export default Balchug;
