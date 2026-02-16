import { useEffect } from "react";

import HeadingOfficePage from "../../components/headingOfficePage/HeadingOfficePage";
import SliderBlack from "../../components/sliderBlack/SliderBlack";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import RatesBlock from "../../components/ratesBlock/RatesBlock";
import GalleryOfficePage from "../../components/galleryOfficePage/GalleryOfficePage";
import MeetingRoomsOfficePage from "../../components/meetingRoomsOfficePage/MeetingRoomsOfficePage";
import Footer from "../../components/footer/Footer";

import "./black.scss";

import { blackRoomsArr } from "../../data/rooms";
import { servicesArray } from "../../data/services";

import imagesSlides1 from "./img/1.jpg";
import imagesSlides2 from "./img/2.jpg";
import imagesSlides3 from "./img/3.jpg";
import imagesSlides4 from "./img/4.jpg";
import imagesSlides5 from "./img/5.jpg";
import imagesSlides6 from "./img/6.jpg";
import imagesMobile1 from "./img/mobile/1.jpg";
import imagesMobile2 from "./img/mobile/2.jpg";
import imagesMobile3 from "./img/mobile/3.jpg";
import imagesMobile4 from "./img/mobile/4.jpg";
import imagesMobile5 from "./img/mobile/5.jpg";
import imagesMobile6 from "./img/mobile/6.jpg";
import blackSliderImg1 from "./img/slider/4.jpg";
import blackSliderImg2 from "./img/slider/5.jpg";
import blackSliderImg3 from "./img/slider/6.jpg";

const Black = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
	const deskImagesGalleryArr = [
		{ img: imagesSlides1 },
		{ img: imagesSlides2 },
		{ img: imagesSlides3 },
		{ img: imagesSlides4 },
		{ img: imagesSlides5 },
		{ img: imagesSlides6 },
	];

	const mobImagesGalleryArr = [
		{ img: imagesMobile1 },
		{ img: imagesMobile2 },
		{ img: imagesMobile3 },
		{ img: imagesMobile4 },
		{ img: imagesMobile5 },
		{ img: imagesMobile6 },
	];

	const sliderBlackImg = [
		{ img: blackSliderImg1 },
		{ img: blackSliderImg2 },
		{ img: blackSliderImg3 },
	];

	const headingContent = {
		title: "Black",
		descr: ["Полностью оборудованные офисы с высокими потолками, панорамным остеклением и мебелью.", 
				<br/>, <br/>, 
				"Большие входные группы, зерновые кофе-машины, оборудованные кухни, мягкие зоны, переговорные комнаты, телефонные будки, душевые комнаты, принтерные зоны."],
		address: ["м. Павелецкая", <br/>, 
				"Кожевническая улица, 14", <br/>, 
				"Вход со стороны ул. Летниковской", <br/>, 
				<a href="tel:+74996478563">+7 (499) 647-85-63</a>],
		svgHEX: "#464646",
	};

	const galleryContent = {
		title: "Общие зоны",
		descr: "Зоны отдыха BLACK оборудованы всеми необходимыми удобствами. Вы можете отдохнуть в мягких креслах и диванах, воспользоваться кухнями с зерновыми кофе-машинами или душевыми после рабочего дня.",
		deskImagesArr: deskImagesGalleryArr,
		mobImagesArr: mobImagesGalleryArr,
	};

	const meetingRoomsContent = {
		title: "Переговорные",
		descr: "Комфортабельные ПК со всем необходимым для продуктивных встреч",
		roomsArr: blackRoomsArr,
		filterArr: [{ name: "Все" }, { name: "до 8 мест" }, { name: "до 6 мест" }],
		roomsType: "Black",
		filterStyle: "black",
        roomsStyles: { styles: "", color: "", border: "", clame: "" }
	}

	useEffect(() => {
		const script = document.createElement("script");

		script.id = "amoforms_script_947509";
		script.src =
		"https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638";
		script.async = true;

		document.body.appendChild(script);

		const script1 = document.createElement("script");

		script1.id = "amoforms_script_1097978";
		script1.src =
		"https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043";
		script1.async = true;

		document.body.appendChild(script1);

		const script2 = document.createElement("script");

		script2.id = "amoforms_script_1097986";
		script2.src =
		"https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321";
		script2.async = true;

		document.body.appendChild(script2);

		return () => {
			document.body.removeChild(script);
			document.body.removeChild(script1);
			document.body.removeChild(script2);
		};
	}, []);

  return (
    <>
      <main id="meetingRooms" className="meeting-rooms">
		<HeadingOfficePage 
			title={headingContent.title} 
			descr={headingContent.descr} 
			address={headingContent.address} 
			svgHEX={headingContent.svgHEX}
		/>
        <SliderBlack bg={sliderBlackImg} />
		<ServicesSlider 
			services={servicesArray} 
			pagesStyle={"black"} 
		/>
		<RatesBlock 
			setForm={setForm} 
			setActiveMail={setActiveMail} 
			setDefaultRate={setDefaultRate} 
			setActiveRate={setActiveRate} 
			style={'black'} 
			activeRate={'black'}
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

export default Black;
