import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import postscribe from "postscribe";
import { useLocation } from "react-router-dom";

import SliderHome from "../../components/sliderHome/SliderHome";
import HomeCategory from "../../components/homeCategory/HomeCategory";
import RatesItem from "../../components/ratesItem/RatesItem";
import ServicesBlock from "../../components/servicesBlock/ServicesBlock";
import Questions from "../../components/questions/Questions";
import AboutBlock from "../../components/aboutBlock/AboutBlock";
import ApplicationsButton from "../../components/applicationsButton/ApplicationsButton";
import Applications from "../../components/applications/Applications";

import useScript from "../../components/useScript/UseScript";

import "./home.scss";

import logo from "../../ui/icons/logo.svg";
import blackCategory from "./img/blackCategory.jpg";
import balchugCategory from "./img/balchugCategory.png";
import roomsCategory from "./img/rooms.jpg";

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
import telegram from "../../ui/icons/footer/telegram.svg";
import vk from "../../ui/icons/footer/vk.svg";
import market from "../../ui/icons/footer/market.svg";
import store from "../../ui/icons/footer/store.svg";
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
import newsLetter from "./img/news/letter.pdf";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import FlipSlider from "../../components/flipSlider/FlipSlider";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import ReactSafe from "react-safe";
import ScriptTag from "@gumgum/react-script-tag";
import App from "../../App";
import ModalForm from "../../components/modalForm/ModalForm";

const Home = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
    const [flip, setFlip] = useState(0);
    const [flipNews, setFlipNews] = useState(0);

    const windowInnerWidth = document.documentElement.clientWidth;
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

    const category = [
        {
            path: "/black",
            img: blackCategory,
            title: "BLACK",
            descr:
                "Гибкий офис BLACK расположен в пешей доступности от метро Павелецкая в БЦ класса В+ на 4 этажах. Полностью оборудованные офисы с высокими потолками, панорамным остеклением и мебелью",
        },
        {
            path: "/balchug",
            img: balchugCategory,
            title: "BALCHUG",
            descr:
                "Гибкий офис BALCHUG сочетает в себе все преимущества отдельно стоящего здания, эстетику тихой набережной Москвы-реки и качественный сервис. Расположен в пешей доступности от метро Новокузнецкая",
        },
        {
            path: "/rooms",
            img: roomsCategory,
            title: "ПЕРЕГОВОРНЫЕ",
            descr:
                "Удобные переговорные комнаты для бизнес встреч и важных дел, оборудованные всем необходимым",
        },
    ];

    let tarif = [
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
            price: "1 790₽",
            price1: "15 900₽",
            price2: "37 250₽",
            href: "SpaceinWidget.run('d54d816a-eb47-481f-ad0d-2feaef9fefa3');",
            href1: "SpaceinWidget.run('9e8a1613-4569-48e5-93fb-bb88136f0dc7');",
            href2: "SpaceinWidget.run('0a3e5956-7e70-47ed-89ab-5497a460eab9');",
            hint: "",
            hint1: "*Срок действия – 60 дней. Доступно посещение локации Balchug",
            hint2: "*Срок действия – 120 дней. Доступно посещение локации Balchug",
            isPay: false,
            tarif: "black"
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
            price: "9 800₽",
            price1: "30 900₽",
            href: "SpaceinWidget.run('c3b5067e-9d55-4e42-a319-18f9123ee57d');",
            href1: "SpaceinWidget.run('79b6428e-99ed-47bc-8777-0f7f58e135fc');",
            isPay: true,
            tarif: "black"
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
            price: "33 900₽",
            price1: "92 700₽",
            href: "SpaceinWidget.run('4aec3ed6-1105-4771-bc3b-1206b53fba4e');",
            href1: "SpaceinWidget.run('95ef20cf-3b7b-46d9-9835-dd725e5b3a98');",
            isPay: true,
            tarif: "black"
        },
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
            isPay: false,
            tarif: "bulchug"
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
            isPay: true,
            tarif: "bulchug"
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
            isPay: true,
            tarif: "bulchug"
        },
    ];

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
    ];

    const ratesHeaderButtons = [{ title: "BLACK" }, { title: "BALCHUG" }];

    const [activeRatesHeader, setActiveRatesHeader] = useState(0);
    const [swicherTarifs, setSwicherTarifs] = useState(false);

    const categoryes = category.map(({ path, img, title, descr }, i) => {
        return (
            <HomeCategory path={path} img={img} title={title} descr={descr} key={i} />
        );
    });

    const tarifs = tarif.map(
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
                isPay,
                tarif
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
                    isPay={isPay}
                    tarif={tarif}
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
                isPay,
                tarif
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
                    isPay={isPay}
                    tarif={tarif}
                    setForm={setForm}
                    setActiveMail={setActiveMail}
                    setDefaultRate={setDefaultRate}
                    setActiveRate={setActiveRate}
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

    const countPounts = windowInnerWidth / 388;
    const countPounts1 = windowInnerWidth / 250;
    const countPounts2 = windowInnerWidth / 283;
    const countPounts3 = windowInnerWidth / 502;

    const [categoryActive, setCategoryActive] = useState([
        {
            title: "black",
            descr:
                "Гибкий офис BLACK расположен в пешей доступности от метро Павелецкая в БЦ класса В+ на 4 этажах. Полностью оборудованные офисы с высокими потолками, панорамным остеклением и мебелью",
            active: true,
            path: "/black",
            img: blackCategory,
        },
        {
            title: "balchug",
            descr:
                "Гибкий офис BALCHUG сочетает в себе все преимущества отдельно стоящего здания, эстетку тихой набережной Москвы-реки и качественный сервис",
            active: false,
            path: "/balchug",
            img: balchugCategory,
        },
        {
            title: "Переговорные",
            descr:
                "Удобные переговорные комнаты для бизнес встреч и важных дел, оборудованные всем необходимым",
            active: false,
            path: "/rooms",
            img: roomsCategory,
        },
    ]);
    const [as, setAs] = useState(3);
    const [as1, setAs1] = useState(true);

    const changeSlideCategory = () => {
        setCategoryActive((item) => {
            if (item[0].active === true) {
                item[0].active = false;
                item[1].active = true;
                return item;
            } else if (item[1].active === true) {
                item[1].active = false;
                item[2].active = true;
                return item;
            } else if (item[2].active === true) {
                item[2].active = false;
                item[0].active = true;
                return item;
            }
        });
        setAs((prev) => {
            if (prev <= 1) {
                return 3;
            }
            return prev - 1;
        });
        setAs1((prev) => !prev);
    };

    let itemsAll = service.length;
    let itemsNewsAll = aboutBlock.length;
    let itemsTranslate = itemsAll / 4;
    // console.log(itemsTranslate)
    // console.log(((512 * 8 - 40) / 1472));
    // console.log((1472 / 4))
    // console.log((512 * 1.7))
    // console.log(itemsNewsAll * 512)
    let newsItem = 512;
    let newsFullWidthItem = (newsItem * itemsNewsAll - 40) / 1512;
    let newsTranslate = Math.floor(newsItem * (newsFullWidthItem - 1));
    let newsItem1444 = 387;
    let newsFullWidthItem1444 = (newsItem1444 * itemsNewsAll - 40) / 1126;
    let newsTranslate1444 = Math.floor(
        newsItem1444 * (newsFullWidthItem1444 - 1)
    );
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

        const script1 = document.createElement("script");
        script1.id = "amoforms_script_1097986";
        script1.src =
            "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321";

        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.id = "amoforms_script_1097978";
        script2.src =
            "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043";

        document.body.appendChild(script2);
    }, []);

    // useEffect(() => {
    //     // const openForms = () => {
    //         const form = document.querySelector('#amoforms_overlay_947509');
    //         console.log(form.style.opacity)
    //         form.style.zIndex = '9999';
    //         form.style.opacity = '1';
    //     // }
    // }, [])

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
            <section className="category__block">
                <div className="container">
                    <h1 className="category__title">
                        KNOW WHERE — это сеть премиальных гибких офисных пространств в самом
                        сердце столицы, куда входят локации BLACK и BALCHUG, которые
                        оборудованы рабочими местами в формате open space, а также
                        переговорными комнатами.
                    </h1>
                    <div className="category__wrapper">
                        <div className="category__mobile">
                            {categoryActive.map(({ title, descr, active, path, img }, i) => {
                                return (
                                    <CategoryMobile
                                        title={title}
                                        descr={descr}
                                        onClick={changeSlideCategory}
                                        active={active}
                                        path={path}
                                        img={img}
                                        key={i}
                                    />
                                );
                            })}
                            <div className={`category__mobile-indicator ${"w" + as}`}></div>
                        </div>
                        {categoryes}
                    </div>
                </div>
            </section>
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
            <section className="services">
                <div className="container">
                    <div className="services__header">
                        <div className="services__title">услуги</div>
                        <p className="services__descr">
                            В гибких офисах KNOW WHERE предусмотрены удобства и услуги для
                            вашего комфорта
                        </p>
                    </div>

                    <div className="services__wrapper">
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
                    />
                    <div className="services__bottom">
                        <h2 className="services__bottom-title">FAQ</h2>
                        <div className="services__wrapper-between">
                            <div className="services__between">
                                <Questions
                                    title="Вы работаете без выходных 24/7?"
                                    descr="Да. Если у вас уже есть активный тариф, вы можете прийти на локацию в любое время. Если это ваше первое посещение, то нужно прийти в промежутке с 9:00 до 20:00 для регистрации, активации тарифа и получения карты доступа."
                                />
                                <Questions
                                    title="Где можно поесть рядом с KW?"
                                    descr="KW Black: в шаговой доступности рыбный ресторан Boston, мясной ресторан Torro Grill, Вкусно - и точка, Prime, Osteria Mario, Пан запекан, KFC, Хлеб насущный, столовая на территории нашего БЦ. KW Balchug: в шаговой доступности Prime, ресторан Touch Chef’s Place & Bar, Хачапури и Вино, ресторан Бьёрн, Masters & Margaritas, Хлеб насущный, Вай мэ."
                                />
                                <Questions
                                    title="Можно запарковать машину у KW?"
                                    descr="Около наших площадок есть городские парковки. Также есть внутренняя парковка на обеих площадках для резидентов с длительной арендой парковочного места."
                                />
                                <Questions
                                    title="Можно ли разговаривать в ваших open space?"
                                    descr="Наши open-space делятся на тихие, где говорить можно только шепотом и общие, где нет ограничений на общение. Также у нас есть удобные лаунж зоны и телефонные будки для комфортных переговоров."
                                />
                            </div>
                            <div className="services__between">
                                <Questions
                                    title="Можно ли юридическому лицу использовать адрес офиса для указания в ЕГРЮЛ?"
                                    descr="Да. Уточнить детали можно у наших администраторов."
                                />
                                <Questions
                                    title="Нужно ли бронировать рабочее место заранее?"
                                    descr="Мы рекомендуем вам рабочее место бронировать заранее, можно даже день в день."
                                />
                                <div className="services__popular-question">
                                    <div className="services__popular-question-top">
                                        <h1 className="services__popular-title">
                                            Остались вопросы?
                                        </h1>
                                        <p className="services__popular-descr">
                                            Оставьте заявку и наш специалист с вами свяжется.
                                        </p>
                                    </div>
                                    <ApplicationsButton
                                        // onClick={() => flipSlider()}
                                        title="Оставить заявку"
                                        styleing="aplicationHover"
                                        setForm={setForm}
                                    />
                                    {/* <script id="amoforms_script_1097986" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321"></script>    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
