import { useEffect } from "react";

import HeadingOfficePage from "../../components/headingOfficePage/HeadingOfficePage";
import SliderBlack from "../../components/sliderBlack/SliderBlack";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import GalleryOfficePage from "../../components/galleryOfficePage/GalleryOfficePage";
import RatesItem from "../../components/ratesItem/RatesItem";
import Applications from "../../components/applications/Applications";

import Footer from "../../components/footer/Footer";

import { servicesArray } from "../../data/services";
import { simonovTarif } from "../../data/tariffs";


import image1 from "./img/kitchen1.jpeg";
import image2 from "./img/kitchen2.jpeg";
import image3 from "./img/phones1.jpg";
import image4 from "./img/pk1.jpeg";
import image5 from "./img/pk2.jpeg";
import image6 from "./img/pk3.jpeg";
import image7 from "./img/places1.jpeg";
import image8 from "./img/places2.jpeg";
import image9 from "./img/places3.jpeg";
import image10 from "./img/reception.jpeg";

import "./simonov.scss";


const Simonov = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
    const deskImagesGalleryArr = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
    ];
    
    const mobImagesGalleryArr = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image5 },
        { img: image6 },
        { img: image7 },
        { img: image8 },
        { img: image9 },
        { img: image10 },
    ];
    
    const sliderBlackImg = [
        { img: image2 },
        { img: image3 },
        { img: image10 },
    ];

    const headingContent = {
		title: "Simonov",
		descr: ["Развитая инфраструктура «Симонов» включает ресепшн, гардеробы, кухни и зоны отдыха. Идеальный баланс между эффективной работой и вдохновляющими видами.", 
                <br/>, <br/>, 
                "Общая вместимость 360 рабочих мест. Просторные open-space и кабинеты с панорамным остеклением и великолепным видом на Москва-реку."],
		address: ["м. Автозаводская", <br/>, 
				"Ленинская Слобода, 26с5", <br/>, 
				<a href="tel:+74996478563">+7 (499) 647-85-63</a>],
		svgHEX: "#222222",
	};

	const galleryContent = {
		title: "Общие зоны",
		descr: "Зоны отдыха SIMONOV оборудованы мягкой мебелью для вашего комфорта.",
		deskImagesArr: deskImagesGalleryArr,
		mobImagesArr: mobImagesGalleryArr,
	};

    const tarifs = simonovTarif.map(
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

    return (
        <>
            <main id="meetingRooms" className="meeting-rooms meeting-rooms_simonov">
                <HeadingOfficePage 
                    title={headingContent.title} 
                    descr={headingContent.descr} 
                    address={headingContent.address} 
                    svgHEX={headingContent.svgHEX}
                />
                <SliderBlack bg={sliderBlackImg} />
                <ServicesSlider 
                    services={servicesArray} 
                    pagesStyle={"simonov"} 
                />

                <section className="rates rates__simonov">
                    <div className="container">
                        <div className="rates__header rates__header__simonov">
                            <div className="rates__header-left">
                                <h2 className="rates__header-title">ТАРИФЫ</h2>
                                <p className="rates__header-descr">Найдите ваш идеальный тариф</p>
                            </div>
                        </div>
                        <div className="rates__wrapper">{tarifs}</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Applications
                                title="посмотрите вживую"
                                descr="Выберите вариант, который подойдёт именно вашей команде"
                                button="Записаться"
                                setForm={setForm}
                            />
                        </div>
                    </div>
                </section>

                <GalleryOfficePage 
                    title={galleryContent.title} 
                    descr={galleryContent.descr} 
                    deskImagesArr={galleryContent.deskImagesArr} 
                    mobImagesArr={galleryContent.mobImagesArr} 
                />
            </main>
            <Footer />
        </>
    );
};

export default Simonov;