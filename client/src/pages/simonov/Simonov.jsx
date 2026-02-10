import { useEffect } from "react";

import HeadingOfficePage from "../../components/headingOfficePage/HeadingOfficePage";
import SliderBlack from "../../components/sliderBlack/SliderBlack";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import GalleryOfficePage from "../../components/galleryOfficePage/GalleryOfficePage";
import Footer from "../../components/footer/Footer";

import { servicesArray } from "../../data/services";

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
		descr: "Скоро открытие!",
		address: ["м. Автозаводская", <br/>, 
				"Ленинская Слобода, 26с5", <br/>, 
				<a href="tel:+74996478563">+7 (499) 647-85-63</a>],
		svgHEX: "#222222",
	};

	const galleryContent = {
		title: "Общие зоны",
		descr: "",
		deskImagesArr: deskImagesGalleryArr,
		mobImagesArr: mobImagesGalleryArr,
	};

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