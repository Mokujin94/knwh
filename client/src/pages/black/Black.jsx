import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

import SliderBlack from '../../components/sliderBlack/SliderBlack';
import SliderRooms from '../../components/sliderRooms/SliderRooms';
import ServicesBlock from '../../components/servicesBlock/ServicesBlock';
import RatesItem from '../../components/ratesItem/RatesItem';
import Applications from '../../components/applications/Applications';
import ImagesItem from '../../components/imagesItem/ImagesItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './black.scss';

import clock from '../services/icons/clock.svg';
import wifi from '../services/icons/wifi.svg';
import technic from '../services/icons/technic.svg';
import zone from '../services/icons/zone.svg';
import coffee from '../services/icons/coffee.svg';
import cofee2 from '../services/icons/cofee2.svg';
import call from '../services/icons/call.svg';
import paper from '../services/icons/paper.svg';
import cleener from '../services/icons/cleener.svg';
import item from '../services/icons/item.svg';
import table from '../services/icons/table.svg';
import замок from '../services/icons/замок.svg';
import кран from '../services/icons/кран.svg';
import defend from '../services/icons/defend.svg';

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

import telegram from '../../ui/icons/footer/telegram.svg';
import vk from '../../ui/icons/footer/vk.svg';
import market from '../../ui/icons/footer/market.svg';
import store from '../../ui/icons/footer/store.svg';
import imagesSlides1 from './img/1.jpg';
import imagesSlides2 from './img/2.jpg';
import imagesSlides3 from './img/3.jpg';
import imagesSlides4 from './img/4.jpg';
import imagesSlides5 from './img/5.jpg';
import imagesSlides6 from './img/6.jpg';
// import imagesSlides7 from './img/7.png'
// import imagesSlides8 from './img/8.jpg'
// import imagesSlides9 from './img/9.png'
// import imagesSlides10 from './img/10.png'
// import imagesSlides11 from './img/11.png'
import imagesMobile1 from './img/mobile/1.jpg';
import imagesMobile2 from './img/mobile/2.jpg';
import imagesMobile3 from './img/mobile/3.jpg';
import imagesMobile4 from './img/mobile/4.jpg';
import imagesMobile5 from './img/mobile/5.jpg';
import imagesMobile6 from './img/mobile/6.jpg';
import blackSliderImg1 from './img/slider/4.jpg';
import blackSliderImg2 from './img/slider/5.jpg';
import blackSliderImg3 from './img/slider/6.jpg';
import blackRoomsImg1 from './img/rooms/1.jpg';
import blackRoomsImg2 from './img/rooms/2.jpg';
import blackRoomsImg3 from './img/rooms/3.jpg';
import blackRoomsImg4 from './img/rooms/4.jpg';
import blackRoomsImg5 from './img/rooms/5.jpg';
import blackRoomsImg6 from './img/rooms/6.jpg';
import blackRoomsImg7 from './img/rooms/7.jpg';
import blackRoomsImg8 from './img/rooms/8.jpg';
import blackRoomsImg9 from './img/rooms/9.jpg';
import blackRoomsImgDgakku from './img/rooms/dgakku.jpg';
import стол from '../balchug/img/icons/стол.svg';
import дом from '../balchug/img/icons/дом.svg';
import проектор from '../balchug/img/icons/проектор.svg';
import тв from '../balchug/img/icons/тв.svg';
import union from '../balchug/img/icons/union.svg';
import стул from '../balchug/img/icons/стул.svg';
import logoBg from '../../ui/icons/logoBg.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Parallax } from 'swiper';
import FlipSlider from '../../components/flipSlider/FlipSlider';
import FilterRooms from '../../components/filterRooms/FilterRooms';
import { useEffect } from 'react';
import Footer from '../../components/footer/Footer';

// ывдлаыдовлаоыв

const Black = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {
  const [flip, setFlip] = useState(0);
  const windowInnerWidth = document.documentElement.clientWidth;
  const rooms = [
    {
      img: 'img',
      title: 'ДЖАККУ',
      descr: 'м. Павелецкая Кожевническая улица, 14',
      price: '2500₽ / час',
      menu: [
        { icon: 'icon', title: '8 посадочных мест' },
        { icon: 'icon', title: 'Общий стол' },
        { icon: 'icon', title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: 'icon',
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
    },
  ];
  const service = [
    { icon: clock, title: 'Доступ 24/7' },
    { icon: wifi, title: 'безлимитный интернет' },
    { icon: technic, title: 'оборудованные переговорки' },
    { icon: zone, title: 'мягкие зоны' },
    { icon: coffee, title: 'ОБОРУДОВАННЫЕ КУХНИ' },
    { icon: cofee2, title: 'ВОДА, ЧАЙ, КОФЕ' },
    { icon: call, title: 'телефонные будки' },
    { icon: paper, title: 'принтер и расходники' },
    { icon: cleener, title: 'Уборка' },
    { icon: item, title: 'Услуги ресепшн' },
    { icon: table, title: 'мебель: кресла, столы' },
    { icon: замок, title: 'СКУД, пропуска от коворкинга' },
    { icon: кран, title: 'коммунальные услуги' },
    { icon: defend, title: 'круглосуточная охрана' },
  ];

  let tarif = [
    {
      title: 'День',
      list: [
        { title: 'Свободное рабочее место' },
        { title: 'Вода, чай и кофе' },
        { title: 'Принтер и сканер' },
        { title: 'Кухня и душевые' },
        { title: 'Доступ 24/7' },
      ],
      listTwo: [
        { title: 'Свободное рабочее место' },
        { title: 'Вода, чай и кофе' },
        { title: 'Принтер и сканер' },
        { title: 'Кухня и душевые' },
        { title: 'Доступ 24/7' },
      ],
      buttons: [
        { title: '1 день' },
        { title: '10 дней' },
        { title: '25 дней' },
      ],
      price: '1 790₽',
      price1: '15 900₽',
      price2: '37 250₽',
      href: "SpaceinWidget.run('d54d816a-eb47-481f-ad0d-2feaef9fefa3');",
      href1: "SpaceinWidget.run('9e8a1613-4569-48e5-93fb-bb88136f0dc7');",
      href2: "SpaceinWidget.run('0a3e5956-7e70-47ed-89ab-5497a460eab9');",
      hint: '',
      hint1: '*Срок действия – 60 дней. Доступно посещение локации Balchug',
      hint2: '*Срок действия – 120 дней. Доступно посещение локации Balchug',
      isPay: false,
      tarif: 'black',
    },
    {
      title: 'Гость',
      list: [
        { title: 'Свободное рабочее место' },
        { title: 'Вода, чай и кофе' },
        { title: 'Принтер и сканер' },
        { title: 'Кухня и душевые' },
        { title: 'Доступ 24/7' },
        { title: '1 час любой переговорной комнаты' },
      ],
      listTwo: [
        { title: 'Свободное рабочее место' },
        { title: 'Вода, чай и кофе' },
        { title: 'Принтер и сканер' },
        { title: 'Кухня и душевые' },
        { title: 'Доступ 24/7' },
        { title: '5 часов любой переговорной комнаты' },
        { title: '30% скидка на аренду переговорных комнат' },
      ],
      buttons: [{ title: 'Неделя' }, { title: 'Месяц' }],
      price: '9 800₽',
      price1: '30 900₽',
      href: "SpaceinWidget.run('c3b5067e-9d55-4e42-a319-18f9123ee57d');",
      href1: "SpaceinWidget.run('79b6428e-99ed-47bc-8777-0f7f58e135fc');",
      isPay: true,
      tarif: 'black',
    },
    {
      title: 'Резидент',
      list: [
        { title: 'Фиксированное рабочее место' },
        { title: 'Вода, чай и кофе' },
        { title: 'Принтер и сканер' },
        { title: 'Кухня и душевые' },
        { title: 'Доступ 24/7' },
        { title: '10 часов любой переговорной комнаты' },
        { title: '50% скидка на аренду переговорных' },
      ],
      listTwo: [
        { title: 'Фиксированное рабочее место' },
        { title: 'Вода, чай и кофе' },
        { title: 'Принтер и сканер' },
        { title: 'Кухня и душевые' },
        { title: 'Доступ 24/7' },
        { title: '10 часов любой переговорной комнаты' },
        { title: '50% скидка на аренду переговорных' },
      ],
      buttons: [{ title: '1 месяц' }, { title: '3 месяца' }],
      price: '33 900₽',
      price1: '92 700₽',
      href: "SpaceinWidget.run('4aec3ed6-1105-4771-bc3b-1206b53fba4e');",
      href1: "SpaceinWidget.run('95ef20cf-3b7b-46d9-9835-dd725e5b3a98');",
      isPay: true,
      tarif: 'black',
    },
  ];
  const image = [
    { img: imagesSlides1 },
    { img: imagesSlides2 },
    { img: imagesSlides3 },
    { img: imagesSlides4 },
    { img: imagesSlides5 },
    { img: imagesSlides6 },
    // {img: imagesSlides7},
    // {img: imagesSlides8},
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
  const blackRoomsArr = [
    {
      img: blackRoomsImg2,
      name: 'ЧУЙСКИЙ ТРАКТ',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '8 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '3000₽ / час',
      href: "SpaceinWidget.run('1e6ecb9a-e184-4dbd-97a6-2fa757078910');",
      places: '8',
    },
    {
      img: blackRoomsImg3,
      name: 'ПАМИРСКИЙ ТРАКТ',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '8 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '3000₽ / час',
      href: "SpaceinWidget.run('f2a170bd-c098-4d15-a354-9556ae27ee1a');",
      places: '8',
    },
    {
      img: blackRoomsImg9,
      name: 'ВЕРДОН',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '6 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '2000₽ / час',
      href: "SpaceinWidget.run('19dd9e2b-13f7-4495-bd03-bbdf3928f8c3');",
      places: '6',
    },
    {
      img: blackRoomsImg8,
      name: 'СТЕЛЬВИО',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '6 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '2000₽ / час',
      href: "SpaceinWidget.run('5a1e175a-d66c-47d3-860b-6913d983dbf6');",
      places: '6',
    },
    {
      img: blackRoomsImgDgakku,
      name: 'ДАЛТОН',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '8 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '3000₽ / час',
      href: "SpaceinWidget.run('962f2f62-a46f-493f-8baf-5c060a00762f');",
      places: '8',
    },
    {
      img: blackRoomsImg1,
      name: 'БОЛЬШОЙ КРУГ',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '8 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '3000₽ / час',
      href: "SpaceinWidget.run('b3b33b9d-f598-441c-8859-84e014120661');",
      places: '8',
    },
    {
      img: blackRoomsImg6,
      name: 'ДОРОГА ТРОЛЛЕЙ',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '6 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '2000₽ / час',
      href: "SpaceinWidget.run('ff25bcf4-359c-45fc-8ede-7b6b184df402');",
      places: '6',
    },
    {
      img: blackRoomsImg5,
      name: 'ТРАССА 60',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '8 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '3000₽ / час',
      href: "SpaceinWidget.run('0c38816a-4b21-46de-92d1-2edff7cbd789');",
      places: '8',
    },
    {
      img: blackRoomsImg7,
      name: 'ТЯНЬМЭНЬ',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '6 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '2000₽ / час',
      href: "SpaceinWidget.run('4fd6513c-286a-45c2-8eb1-1d3b8a067ab3');",
      places: '6',
    },
    {
      img: blackRoomsImg4,
      name: 'ГОЛИАНЬ',
      adress: 'м. Павелецкая Кожевническая улица, 14',
      list: [
        { icon: дом, title: '8 посадочных мест' },
        { icon: стол, title: 'Общий стол' },
        { icon: проектор, title: 'Samsung Flip — цифровой флипчарт ' },
        {
          icon: тв,
          title:
            'ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения',
        },
      ],
      price: '3000₽ / час',
      href: "SpaceinWidget.run('19612355-b762-481d-88c4-3daf902f2742');",
      places: '8',
    },
  ];
  const [filter, setFilter] = useState(blackRoomsArr);

  const [translateImages, setTranslateImages] = useState(0);

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
        tarif,
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

  // useEffect(() => {
  //     setTranslateImages(-9633);
  //     setInterval(() => {

  //         if (translateImages <= -9633) {
  //             setTranslateImages(0);
  //         }
  //     }, 10)
  // }, [])

  // setTranslateImages(-9333);

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
    { name: 'Все' },
    { name: 'до 8 мест' },
    { name: 'до 6 мест' },
  ];

  const newFilter = (name) => {
    if (name === 'Все') {
      setFilter(blackRoomsArr);
    } else if (name === '65 мест') {
      const filtered = blackRoomsArr.filter((arr) => {
        return arr.places === '65';
      });
      setFilter(filtered);
    } else if (name === '12 мест') {
      const filtered = blackRoomsArr.filter((arr) => {
        return arr.places === '12';
      });
      setFilter(filtered);
    } else if (name === 'до 8 мест') {
      const filtered = blackRoomsArr.filter((arr) => {
        return arr.places === '8';
      });
      setFilter(filtered);
    } else if (name === 'до 6 мест') {
      const filtered = blackRoomsArr.filter((arr) => {
        return arr.places === '6';
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
    cssEase: 'linear',
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
    cssEase: 'linear',
    variableWidth: true,
    rows: 1,
    arrows: false,
    rtl: true,
  };

  useEffect(() => {
    const script = document.createElement('script');

    script.id = 'amoforms_script_1097986';
    script.src =
      'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782321';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');

    script.id = 'amoforms_script_947509';
    script.src =
      'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');

    script.id = 'amoforms_script_1097978';
    script.src =
      'https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section id='meetingRooms' className='meeting-rooms'>
        <img className='logo-bg' src={logoBg} alt='logo' />
        <div className='container'>
          <div className='black__header'>
            <div className='black__left'>
              <h1 className='black__title'>black</h1>
              <div className='black__right black__right__mobile'>
                м. Павелецкая <br />
                Кожевническая улица, 14 <br />
                Вход со стороны ул. Летниковской <br />
                +7 (499) 647-85-63
                <br />
                <br />
                <br />
              </div>
              <p className='black__descr'>
                Полностью оборудованные офисы с высокими потолками, панорамным
                остеклением и мебелью. <br /> <br /> Большие входные группы,
                зерновые кофе-машины, оборудованные кухни, мягкие зоны,
                переговорные комнаты, телефонные будки, душевые комнаты,
                принтерные зоны.
              </p>
            </div>
            <div className='black__right'>
              м. Павелецкая <br />
              Кожевническая улица, 14 <br />
              Вход со стороны ул. Летниковской <br />
              +7 (499) 647-85-63
            </div>
          </div>
        </div>
        <SliderBlack bg={sliderBlackImg} />
        <div className='container services__container'>
          <div className='services__header'>
            <div className='services__title'>услуги</div>
            <p className='services__descr'>
              В гибких офисах KNOW WHERE предусмотрены удобства и услуги для
              вашего комфорта
            </p>
          </div>
          <div className='services__wrapper' style={{ userSelect: 'none' }}>
            {windowInnerWidth <= 900 ? (
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className='mySwiper'
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
            style={'black'}
          />
        </div>
      </section>
      {/* 
            <section className='services services__black'>

            </section> */}
      <section className='rates'>
        <div className='container'>
          <div
            className={
              windowInnerWidth < 560
                ? 'rates__header rates__header__black'
                : 'rates__header'
            }
          >
            <div className='rates__header-left'>
              <h2 className='rates__header-title'>ТАРИФЫ</h2>
              <p className='rates__header-descr'>Найдите ваш идеальный тариф</p>
            </div>
          </div>
          <div className='rates__wrapper'>{tarifs}</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Applications
              title='посмотрите вживую'
              descr='Выберите кабинет, который подойдёт именно вашей команде'
              // additionally={"Будьте в числе первых!"}
              // additionally2={
              //   "*акция действует до 31.01 включительно. *при единовременной оплате 2-х месяцев."
              // }
              style={windowInnerWidth > 560 ? 'apliHome' : false}
              button='Записаться'
              setForm={setForm}
            />
            <script
              id='amoforms_script_947509'
              async='async'
              charset='utf-8'
              src='https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678781638'
            ></script>
          </div>
        </div>
      </section>
      <section className='images'>
        <div className='container'>
          <div className='images__header'>
            <h2 className='images__title'>Общие зоны</h2>
            <p className='images__descr'>
              Зоны отдыха BLACK оборудованы всеми необходимыми удобствами. Вы
              можете отдохнуть в мягких креслах и диванах, воспользоваться
              кухнями с зерновыми кофе-машинами или душевыми после рабочего дня.
            </p>
          </div>
          <div className='images__wrapper' style={{ userSelect: 'none' }}>
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
        <div className='container'>
          <div className='meeting-rooms__header'>
            <div className='meeting-rooms__header-left'>
              <h2 className='meeting-rooms__title'>переговорные</h2>
              <p className='meeting-rooms__descr'>
                Комфортабельные ПК со всем необходимым для продуктивных встреч
              </p>
            </div>
            <div className='meeting-rooms__header-right'>
              <FilterRooms onClick={newFilter} option={option} />
            </div>
          </div>
        </div>
        <SliderRooms styles={''} color={''} border={''} arr={filter} />
      </section>
      <Footer />
    </>
  );
};

export default Black;
