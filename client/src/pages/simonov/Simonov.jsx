import { useEffect } from "react";

import HeadingOfficePage from "../../components/headingOfficePage/HeadingOfficePage";
import SliderBlack from "../../components/sliderBlack/SliderBlack";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import GalleryOfficePage from "../../components/galleryOfficePage/GalleryOfficePage";
import RatesBlock from "../../components/ratesBlock/RatesBlock";
import MeetingRoomsOfficePage from "../../components/meetingRoomsOfficePage/MeetingRoomsOfficePage";
import Footer from "../../components/footer/Footer";

import { servicesArray } from "../../data/services";
import { simonovRoomsArr } from "../../data/rooms";

import banner1 from "./img/banner-1.jpg";
import banner2 from "./img/banner-2.jpg";
import banner3 from "./img/banner-3.jpg";
import banner4 from "./img/banner-4.jpg";

import oz1 from "./img/oz-1.jpg";
import oz2 from "./img/oz-2.jpg";
import oz3 from "./img/oz-3.jpg";
import oz4 from "./img/oz-4.jpg";
import oz5 from "./img/oz-5.jpg";
import oz6 from "./img/oz-6.jpg";
import oz7 from "./img/oz-7.jpg";

import pk1 from "./img/pk-1.jpg";
import pk2 from "./img/pk-2.jpg";
import pk3 from "./img/pk-3.jpg";
import pk4 from "./img/pk-4.jpg";
import pk7 from "./img/pk-7.jpg";
import pk8 from "./img/pk-8.jpg";

// import image1 from "./img/kitchen1.jpeg";
// import image2 from "./img/kitchen2.jpeg";
// import image3 from "./img/phones1.jpg";
// import image4 from "./img/pk1.jpeg";
// import image5 from "./img/pk2.jpeg";
// import image6 from "./img/pk3.jpeg";
// import image7 from "./img/places1.jpeg";
// import image8 from "./img/places2.jpeg";
// import image9 from "./img/places3.jpeg";
// import image10 from "./img/reception.jpeg";

import "./simonov.scss";


const Simonov = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
    const deskImagesGalleryArr = [
        { img: oz1 },
        { img: oz2 },
        { img: oz3 },
        { img: oz4 },
        { img: oz5 },
        { img: oz6 },
        { img: oz7 },
    ];
    
    const mobImagesGalleryArr = deskImagesGalleryArr;
    
    const sliderBlackImg = [
        { img: banner4 },
        { img: banner1 },
        { img: banner2 },
        { img: banner3 },
    ];

    const headingContent = {
		title: "Simonov",
		descr: ["Гибкий офис SIMONOV — это светлые офисные блоки с панорамным остеклением и видом на набережную и Москва-реку. Площадку можно разделить на автономные офисные блоки от 100 рабочих мест — практически под любой запрос.", 
                <br/>, <br/>, 
                "Внутри каждого блока — своя кухня, переговорные комнаты, локеры для личных вещей, лаунж-зоны, ресепшн, гардеробы и кроссовые. Рядом — развитая инфраструктура БЦ «Симонов Плаза»: столовая, кафе и кофейни.",
                <br />, <br />,
                "м. Автозаводская (выход №3) — 5–7 мин пешком, МЦК — 15 мин пешком.",
                <br />,
                "Прямой выезд на Крутицкую и Симоновскую набережные, рядом выезд на ТТК.",
                <br />,
                "Доступна аренда парковочных мест (наземный и крытый паркинг).",
                ],
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

    const meetingRoomsContent = {
        title: "Переговорные",
        descr: "Комфортабельные ПК со всем необходимым для продуктивных встреч",
        roomsArr: simonovRoomsArr,
        filterArr: [{ name: "Все" }, { name: "до 4 мест" }, { name: "до 8 мест" }, { name: "до 17 мест" }],
        roomsType: "Simonov",
        filterStyle: "simonov",
        roomsStyles: { styles: "simonov", color: "", border: "", clame: "" }
    }

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
                    sliderStyle={"grey"}
                />

                <RatesBlock 
                    setForm={setForm} 
                    setActiveMail={setActiveMail} 
                    setDefaultRate={setDefaultRate} 
                    setActiveRate={setActiveRate} 
                    style={'simonov'} 
                    activeRate={'simonov'}
                    showSwitchBtns={false} 
                />

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
            </main>
            <Footer />
        </>
    );
};

export default Simonov;