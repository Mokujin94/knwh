import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import postscribe from "postscribe";
import { useLocation } from "react-router-dom";

import SliderHome from "../../components/sliderHome/SliderHome";
import RatesItem from "../../components/ratesItem/RatesItem";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import FaqBlock from "../../components/faqBlock/FaqBlock";
import AboutBlock from "../../components/aboutBlock/AboutBlock";
import ApplicationsButton from "../../components/applicationsButton/ApplicationsButton";
import Applications from "../../components/applications/Applications";
import OfficeCategories from "../../components/officeCategories/OfficeCategories";

import useScript from "../../components/useScript/UseScript";

import "./home.scss";

import { balchugTarif, blackTarif } from "../../data/tariffs";
import { servicesArray } from "../../data/services";
import { homePageFAQ } from "../../data/faq";
import { officeCategories } from "../../data/officeCategories";

import logo from "../../ui/icons/logo.svg";
import blackCategory from "./img/blackCategory.jpg";
import balchugCategory from "./img/balchugCategory.jpg";
import roomsCategory from "./img/rooms.jpg";

import news1 from "./img/news/1.png";
import news2 from "./img/news/2.jpg";
import news3 from "./img/news/3.png";
import news4 from "./img/news/4.png";
import news5 from "./img/news/5.png";
import news6 from "./img/news/3.jpg";
import news7 from "./img/news/4.jpg";
import news8 from "./img/news/5.jpg";
import news9 from "./img/news/6.png";
import news10 from "./img/news/6.jpg";
import news11 from "./img/news/11.jpg";
import news12 from "./img/news/12.jpg";
import news13 from "./img/news/13.jpg";
import news14 from "./img/news/14.jpg";
import newsLetter from "./img/news/letter.pdf";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import FlipSlider from "../../components/flipSlider/FlipSlider";
import Footer from "../../components/footer/Footer";


const Home = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
    const [flipNews, setFlipNews] = useState(0);

    const windowInnerWidth = document.documentElement.clientWidth;

    const aboutBlock = [
        {
            img: news1,
            descr:
                "Synergy Business Solutions арендовала 65 рабочих мест в Know Where",
            link: "https://cre.ru/news/88625",
        },
        {
            img: news2,
            descr:
                "КОВОРКИНГ KNOW WHERE ПОМОГ ФОНДУ ВТОРОЕ ДЫХАНИЕ СОБРАТЬ 31,2 КГ ВЕЩЕЙ",
            link: "https://vtoroe.ru/charity/veshhi-pomogayut/",
        },
        {
            img: news3,
            descr: "На рынке сервисных офисов появился новый бренд KNOW WHERE",
            link: "https://fbss.ru/na-rynke-servisnyh-ofisov-poyavilsya-novyj-brend-kw/tsao/",
        },
        {
            img: news4,
            descr: "FINTECH-КОМПАНИЯ АРЕНДОВАЛА 91 МЕСТО В КОВОРКИНГЕ НА БАЛЧУГЕ",
            link: "https://www.cre.ru/news/88589",
        },
        {
            img: news5,
            descr: "KNOW WHERE BALCHUG ПРИМЕТ АРЕНДАТОРа",
            link: "https://www.cre.ru/news/88332",
        },
        {
            img: news6,
            descr: "KHOW WHERE. Атмосфера деловой эстетики",
            link: "http://moscow.avtor-project.ru/tpost/ma9zk319e1-khow-where-atmosfera-delovoi-estetiki",
        },
        {
            img: news7,
            descr: "Идеальная локация для бизнеса",
            link: "https://moscow.avtor-project.ru/tpost/nlf69jxh31-idealnaya-lokatsiya-dlya-biznesa",
        },
        {
            img: news8,
            descr:
                'Благодарственное письмо от благотворительного фонда развития  науки и образования "Новая Эра"',
            link: news8,
        },
        {
            img: news9,
            descr:
                "Благодарственное письмо от благотворительного фонда «Старость в радость»",
            link: newsLetter,
        },
        {
            img: news10,
            descr: "«Национальная Лотерея» расширилась в KW Black на Кожевнической",
            link: "https://cre.ru/news/91018",
        },
        {
            img: news11,
            descr: "В KNOW WHERE СДАЛИ 137 МЕСТ",
            link: "https://cre.ru/news/93214",
        },
        {
            img: news12,
            descr: "МАРКЕТОЛОГИ ВЫБРАЛИ KNOW WHERE БАЛЧУГ",
            link: "https://cre.ru/news/95178",
        },
        {
            img: news13,
            descr: "FLOWWOW СМЕНИЛ АДРЕС",
            link: "https://cre.ru/news/95201",
        },
        {
            img: news14,
            descr: "В KW BLACK АРЕНДОВАЛИ 793 КВ. М",
            link: "https://cre.ru/news/96729",
        },
    ].reverse();

    const ratesHeaderButtons = [{ title: "BLACK" }, { title: "BALCHUG" }];

    const [activeRatesHeader, setActiveRatesHeader] = useState(0);
    const [swicherTarifs, setSwicherTarifs] = useState(false);


    const tarifs = blackTarif.map(
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

    const balchugTarifs = balchugTarif.map(
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

    const aboutBlocks = aboutBlock.map(({ img, descr, link }, i) => {
        if (windowInnerWidth < 900) {
            return (
                <SwiperSlide>
                    <AboutBlock img={img} descr={descr} link={link} key={i} />
                </SwiperSlide>
            );
        } else {
            return (
                <AboutBlock
                    img={img}
                    descr={descr}
                    link={link}
                    key={i}
                    translate={flipNews}
                />
            );
        }
    });

    const ratesHeaderButton = ratesHeaderButtons.map(({ title }, i) => {
        return (
            <div
                onClick={() => balchugButton(i)}
                className={
                    activeRatesHeader === i
                        ? "rates__header-button rates__header-button__active"
                        : "rates__header-button"
                }
                key={i}
            >
                <h2 className="rates__header-button-title">{title}</h2>
            </div>
        );
    });

    const balchugButton = (i) => {
        setActiveRatesHeader(i);
        if (i === 1) {
            setSwicherTarifs(true);
        } else {
            setSwicherTarifs(false);
        }
    };

    const countPounts2 = windowInnerWidth / 283;
    const countPounts3 = windowInnerWidth / 502;


  

    let itemsNewsAll = aboutBlock.length;
    let newsItem = 512;
    let newsFullWidthItem = (newsItem * itemsNewsAll - 40) / 1512;
    let newsTranslate = Math.floor(newsItem * (newsFullWidthItem - 1));
    let newsItem1444 = 387;
    let newsFullWidthItem1444 = (newsItem1444 * itemsNewsAll - 40) / 1126;
    let newsTranslate1444 = Math.floor(
        newsItem1444 * (newsFullWidthItem1444 - 1)
    );



    const flipNewsLeft = () => {
        if (windowInnerWidth > 1440) {
            if (flipNews <= -(newsTranslate * 3)) {
                setFlipNews(0);
            } else {
                setFlipNews((flipNews) => flipNews - newsTranslate);
            }
        } else {
            if (flipNews <= -(newsTranslate1444 * 3)) {
                setFlipNews(0);
            } else {
                setFlipNews((flipNews) => flipNews - newsTranslate1444);
            }
        }
    };
    const flipNewsRight = () => {
        if (windowInnerWidth > 1440) {
            if (flipNews >= 0) {
                setFlipNews(0);
            } else {
                setFlipNews((flipNews) => flipNews + newsTranslate);
            }
        } else {
            if (flipNews >= 0) {
                setFlipNews(0);
            } else {
                setFlipNews((flipNews) => flipNews + newsTranslate1444);
            }
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.id = "amoforms_script_947509";
        script.src =
            "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638";

        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.id = "amoforms_script_1097978";
        script2.src =
            "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043";

        document.body.appendChild(script2);
    }, []);

    return (
        <>
            <section className="home">
                <div className="header__background"></div>
                <div className="slider__block">
                    <img src={logo} alt="logo" className="home__logo" />
                    <SliderHome />
                    {/* <div className="stock" onClick={() => setForm(true)}>
            <div className="stock__wrapper">
              <h2 className="stock__title">Новогодняя акция 2+1</h2>
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 895.401 895.4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M328.177,875.4c0,11,9,20,20,20h295.599c11,0,20-9,20-20V829.6H328.177V875.4z"></path>
                      <path d="M321.477,322.9l0.101-146.3c0-16.9,6.399-32.7,18.1-44.5c13-13,31.6-20.4,51.2-20.4c15.3,0,30,4.7,41.399,13.1 c13.801,10.2,22.4,25.6,24.2,43.2c0,0.4,7.9,76.7,15,145c49.7-29.2,83.2-83.2,83.2-145c0-92.8-75.2-168-168-168 c-92.8,0-168,75.2-168,168C218.577,237.6,260.977,297.4,321.477,322.9z"></path>
                      <path d="M716.176,513.801c0-19.5-12.5-36.801-31.1-42.801c-55.5-18.1-167.5-54.2-184.601-57.6c-5.3-1-10.5-1.5-15.5-1.5 c-13.5,0-25.3,3.7-32.399,10h-0.101c0,0,0,0,0-0.1c-0.1-0.801-25.899-250.3-25.899-250.7c-2.101-20-18.7-29.5-35.801-29.5 c-19.399,0-39.399,12.2-39.3,34.9l-0.2,404.301c0,4.799-3.5,8.799-8.3,9.5c-0.1,0-0.1,0-0.2,0c-0.399,0.1-0.899,0.1-1.3,0.1 c-0.1,0-0.2,0-0.3,0c-13.6-0.4-44.3-0.801-74.2-44.1c-4-5.701-7.6-10.9-10.9-15.701c-10.4-14.9-24.3-21.299-37.4-21.299 c-23,0-43.7,19.898-38.7,49.6c7.2,43.299,54.6,144.199,148,238.799h335.6l33.899-57.299c12.101-20.301,18.5-43.5,18.5-67.201 L716.176,513.801z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div> */}
                </div>
            </section>

            <OfficeCategories categories={officeCategories} />

            <section className="rates">
                <div className="container">
                    <div className="rates__header">
                        <div className="rates__header-left">
                            <h2 className="rates__header-title">ТАРИФЫ</h2>
                            <p className="rates__header-descr">Найдите ваш идеальный тариф</p>
                        </div>
                        <div className="rates__header-buttons">{ratesHeaderButton}</div>
                    </div>
                    <div
                        className={
                            swicherTarifs
                                ? "rates__wrapper rates__wrapper__balchug"
                                : "rates__wrapper"
                        }
                    >
                        {swicherTarifs ? balchugTarifs : tarifs}
                    </div>
                    <div
                        className="fix"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Applications
                            title="посмотрите вживую"
                            descr="Выберите кабинет, который подойдёт именно вашей команде"
                            // additionally={"Будьте в числе первых!"}
                            // additionally2={
                            //   "*акция действует до 31.01 включительно. *при единовременной оплате 2-х месяцев."
                            // }
                            button="Записаться"
                            style={"apliHome"}
                            setForm={setForm}
                        />
                        {/* <script id="amoforms_script_947509" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638"></script> */}
                    </div>
                </div>
            </section>

            <ServicesSlider services={servicesArray} pagesStyle={"home"} />
            <FaqBlock array={homePageFAQ} setForm={setForm} pagesStyle={"home"} />
            
            <section className="about">
                <div className="container">
                    <h2 className="about__title">СМИ О НАС</h2>
                    <div className="about__wrapper">
                        {windowInnerWidth <= 900 ? (
                            <Swiper
                                freeMode={true}
                                grabCursor={true}
                                modules={[FreeMode, Parallax]}
                                className="mySwiper"
                                slidesPerView={2.95}
                                spaceBetween={40}
                                breakpoints={{
                                    1: {
                                        slidesPerView: countPounts2,
                                    },
                                    561: {
                                        slidesPerView: countPounts3,
                                    },
                                    1480: {
                                        slidesPerView: 2.95,
                                    },
                                }}
                            >
                                {aboutBlocks}
                            </Swiper>
                        ) : (
                            aboutBlocks
                        )}
                    </div>
                    <FlipSlider
                        onClickRight={() => flipNewsRight()}
                        onClickLeft={() => flipNewsLeft()}
                        translate={flipNews}
                        number25={0}
                        number50={
                            windowInnerWidth > 1440 ? -newsTranslate : -newsTranslate1444
                        }
                        number75={
                            windowInnerWidth > 1440
                                ? -(newsTranslate * 2)
                                : -(newsTranslate1444 * 2)
                        }
                        number100={
                            windowInnerWidth > 1440
                                ? -(newsTranslate * 3)
                                : -(newsTranslate1444 * 3)
                        }
                        style={"news"}
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Applications
                            title="Стать нашим партнером"
                            descr="Мы рады сотрудничеству, рассматриваем все заявки!"
                            button="Оставить заявку"
                            setForm={setForm}
                        />
                        {/* <script id="amoforms_script_1097978"  charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043"></script> */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const CategoryMobile = ({ title, descr, onClick, active, path, img }) => {
    return (
        <div
            className="category__mobile-item"
            onClick={onClick}
            style={{ opacity: active ? "1" : "0", zIndex: active ? "3" : "2" }}
        >
            <div className="category__mobile-img">
                <img src={img} alt="img" />
            </div>
            <div className="category__mobile-header">
                <Link to={path} className="category__mobile-title">
                    {title}
                </Link>
                <p className="category__mobile-descr">{descr}</p>
            </div>
        </div>
    );
};

export default Home;
