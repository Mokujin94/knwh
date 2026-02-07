import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

import SliderBlack from "../../components/sliderBlack/SliderBlack";
import SliderRooms from "../../components/sliderRooms/SliderRooms";
import ServicesSlider from "../../components/servicesSlider/ServicesSlider";
import RatesItem from "../../components/ratesItem/RatesItem";
import Applications from "../../components/applications/Applications";
import ImagesItem from "../../components/imagesItem/ImagesItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./black.scss";

import { blackTarif } from "../../data/tariffs";
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

import logoBg from "../../ui/icons/logoBg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import FilterRooms from "../../components/filterRooms/FilterRooms";
import Footer from "../../components/footer/Footer";

const Black = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
	const [filter, setFilter] = useState(blackRoomsArr);

	const windowInnerWidth = document.documentElement.clientWidth;

	const image = [
		{ img: imagesSlides1 },
		{ img: imagesSlides2 },
		{ img: imagesSlides3 },
		{ img: imagesSlides4 },
		{ img: imagesSlides5 },
		{ img: imagesSlides6 },
	];

	const image2 = [
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


	const tarifs = blackTarif.map((tariff, i) => {
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
	});

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
    { name: "до 8 мест" },
    { name: "до 6 мест" },
  ];

	const newFilter = (name) => {
		if (name === "Все") {
			setFilter(blackRoomsArr);
		} else if (name === "65 мест") {
			const filtered = blackRoomsArr.filter((arr) => {
				return arr.places === "65";
			});
			setFilter(filtered);
		} else if (name === "12 мест") {
			const filtered = blackRoomsArr.filter((arr) => {
				return arr.places === "12";
			});
		setFilter(filtered);
		} else if (name === "до 8 мест") {
			const filtered = blackRoomsArr.filter((arr) => {
				return arr.places === "8";
			});
		setFilter(filtered);
		} else if (name === "до 6 мест") {
			const filtered = blackRoomsArr.filter((arr) => {
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

	useEffect(() => {
		const script = document.createElement("script");

		script.id = "amoforms_script_947509";
		script.src =
		"https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638";
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	useEffect(() => {
		const script = document.createElement("script");

		script.id = "amoforms_script_1097978";
		script.src =
		"https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043";
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

  return (
    <>
      <section id="meetingRooms" className="meeting-rooms">
        <img className="logo-bg" src={logoBg} alt="logo" />
        <div className="container">
          <div className="black__header">
            <div className="black__left">
              <h1 className="black__title">black</h1>
              <div className="black__right black__right__mobile">
                м. Павелецкая <br />
                Кожевническая улица, 14 <br />
                Вход со стороны ул. Летниковской <br />
                +7 (499) 647-85-63
                <br />
                <br />
                <br />
              </div>
              <p className="black__descr">
                Полностью оборудованные офисы с высокими потолками, панорамным
                остеклением и мебелью. <br /> <br /> Большие входные группы,
                зерновые кофе-машины, оборудованные кухни, мягкие зоны,
                переговорные комнаты, телефонные будки, душевые комнаты,
                принтерные зоны.
              </p>
            </div>
            <div className="black__right">
              м. Павелецкая <br />
              Кожевническая улица, 14 <br />
              Вход со стороны ул. Летниковской <br />
              +7 (499) 647-85-63
            </div>
          </div>
        </div>
        <SliderBlack bg={sliderBlackImg} />
		<ServicesSlider services={servicesArray} pagesStyle={"black"} />
      </section>

      <section className="rates">
        <div className="container">
          <div
            className={
              windowInnerWidth < 560
                ? "rates__header rates__header__black"
                : "rates__header"
            }
          >
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
              style={windowInnerWidth > 560 ? "apliHome" : false}
              button="Записаться"
              setForm={setForm}
            />
            <script
              id="amoforms_script_947509"
              async="async"
              charset="utf-8"
              src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638"
            ></script>
          </div>
        </div>
      </section>
      <section className="images">
        <div className="container">
          <div className="images__header">
            <h2 className="images__title">Общие зоны</h2>
            <p className="images__descr">
              Зоны отдыха BLACK оборудованы всеми необходимыми удобствами. Вы
              можете отдохнуть в мягких креслах и диванах, воспользоваться
              кухнями с зерновыми кофе-машинами или душевыми после рабочего дня.
            </p>
          </div>
          <div className="images__wrapper" style={{ userSelect: "none" }}>
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
              <h2 className="meeting-rooms__title">переговорные</h2>
              <p className="meeting-rooms__descr">
                Комфортабельные ПК со всем необходимым для продуктивных встреч
              </p>
            </div>
            <div className="meeting-rooms__header-right">
              <FilterRooms onClick={newFilter} option={option} />
            </div>
          </div>
        </div>
        <SliderRooms
          styles={""}
          color={""}
          border={""}
          arr={filter}
          roomsType={"Black"}
          setForm={setForm}
          setActiveMail={setActiveMail}
          setDefaultRate={setDefaultRate}
          setActiveRate={setActiveRate}
        />
      </section>
      <Footer />
    </>
  );
};

export default Black;
