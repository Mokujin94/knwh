import { useEffect } from "react";

import HeadingOfficePage from "../../components/headingOfficePage/HeadingOfficePage";
import SliderBlack from "../../components/sliderBlack/SliderBlack";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import RatesBlock from "../../components/ratesBlock/RatesBlock";
import GalleryOfficePage from "../../components/galleryOfficePage/GalleryOfficePage";
import MeetingRoomsOfficePage from "../../components/meetingRoomsOfficePage/MeetingRoomsOfficePage";
import Footer from "../../components/footer/Footer";

import "./balchug.scss";

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


const Balchug = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
    const deskImagesGalleryArr = [
        { img: imagesSlides1 },
        { img: imagesSlides2 },
        { img: imagesSlides4 },
        { img: imagesSlides5 },
        { img: imagesSlides6 },
        { img: imagesSlides7 },
    ];

    const mobImagesGalleryArr = [
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


    const headingContent = {
        title: "balchug",
        descr: ["Гибкий офис BALCHUG сочетает в себе все преимущества отдельностоящего здания, эстетику тихой набережной ", <span className="nowrap">Москвы-реки</span>, " и качественный сервис.", 
                <br/>, <br/>, 
                "На территории пространства можно забронировать оборудованные переговорные комнаты. В тёплое время года на 5 этаже открыта мебилированная терраса."],
        address: ["м. Новокузнецкая", <br/>, 
                    "Садовническая наб., 9", <br/>, 
                    <a href="tel:+74996478563">+7 (499) 647-85-63</a>],
        svgHEX: "#b3a16e",
    };

    const galleryContent = {
        title: "Общие зоны",
        descr: "Зоны отдыха BALCHUG оборудованы мягкой мебелью для вашего комфорта. В тёплое время года открыта мебелированная терраса с видом на Москва-реку.",
        deskImagesArr: deskImagesGalleryArr,
        mobImagesArr: mobImagesGalleryArr,
    };

    const meetingRoomsContent = {
        title: "Переговорные",
        descr: "Комфортабельные ПК со всем необходимым для продуктивных встреч",
        roomsArr: bulchugRoomsArr,
        filterArr: [{ name: "Все" }, { name: "до 65 мест" }, { name: "до 12 мест" }, { name: "до 8 мест" }, { name: "до 6 мест" }],
        roomsType: "Balchug",
        filterStyle: "bulchug",
        roomsStyles: { styles: "room__wrapper__balchug", color: "balchug__color", border: "balchug__border", clame: "carousel__black-new" }
    }

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
            <main className="meeting-rooms meeting-rooms__balchug">
                <HeadingOfficePage 
                    title={headingContent.title} 
                    descr={headingContent.descr} 
                    address={headingContent.address} 
                    svgHEX={headingContent.svgHEX}
                />
                <SliderBlack bg={sliderBulchugImg} />
                <ServicesSlider services={servicesArray} pagesStyle={"news"} sliderStyle={"beige"} />

                <RatesBlock 
                    setForm={setForm} 
                    setActiveMail={setActiveMail} 
                    setDefaultRate={setDefaultRate} 
                    setActiveRate={setActiveRate} 
                    style={'balchug'} 
                    activeRate={'balchug'}
                    showSwitchBtns={false} 
                />

                <div style={{background: "#e8e8e8"}}>
                    <GalleryOfficePage 
                        title={galleryContent.title} 
                        descr={galleryContent.descr} 
                        deskImagesArr={galleryContent.deskImagesArr} 
                        mobImagesArr={galleryContent.mobImagesArr} 
                    />
                    <MeetingRoomsOfficePage 
                        title={meetingRoomsContent.title} 
                        descr={meetingRoomsContent.descr} 
                        roomsArr={meetingRoomsContent.roomsArr}
                        filterArr={meetingRoomsContent.filterArr}
                        roomsType={meetingRoomsContent.roomsType} 
                        filterStyle={meetingRoomsContent.filterStyle}
                        roomsStyles={meetingRoomsContent.roomsStyles}
                        setForm={setForm} 
                        setActiveMail={setActiveMail} 
                        setDefaultRate={setDefaultRate} 
                        setActiveRate={setActiveRate}
                    />
                </div>
            </main>

            <Footer style={"footer__white"} />
        </>
    );
};

export default Balchug;
