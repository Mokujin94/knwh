import bulchugImgTrassa40 from '../images/rooms/balchug/trassa_40.jpg';
import bulchugImgMilford from '../images/rooms/balchug/milford.jpg';
import bulchugImgAmalfi from '../images/rooms/balchug/amalfi.jpg';
import bulchugImgTransfegerashskoeShosse from '../images/rooms/balchug/transfegerashskoe_shosse.jpg';
import bulchugImgHaivan from '../images/rooms/balchug/haivan.jpg';
import bulchugImgKonferentsZal from '../images/rooms/balchug/konferents_zal.jpg';

import blackImgChuiskiyTrakt from '../images/rooms/black/chuiskiy_trakt.jpg';
import blackImgPamirskiyTrakt from '../images/rooms/black/pamirskiy_trakt.jpg';
import blackImgVerdon from '../images/rooms/black/verdon.jpg';
import blackImgStelvio from '../images/rooms/black/stelvio.jpg';
import blackImgDalton from '../images/rooms/black/dalton.jpg';
import blackImgBolshoyKrug from '../images/rooms/black/bolshoy_krug.jpg';
import blackImgDorogaTrolley from '../images/rooms/black/doroga_trolley.jpg';
import blackImgTrassa60 from '../images/rooms/black/trassa_60.jpg';
import blackImgTyanmen from '../images/rooms/black/tyanmen.jpg';
import blackImgGolian from '../images/rooms/black/golian.jpg';

import houseIcon from '../images/rooms/icons/house.svg';
import tableIcon from '../images/rooms/icons/table.svg';
import projectorIcon from '../images/rooms/icons/projector.svg';
import tvIcon from '../images/rooms/icons/tv.svg';
import chairIcon from '../images/rooms/icons/chair.svg';
import unionIcon from '../images/rooms/icons/union.svg';


export const bulchugRoomsArr = [
    {
        img: bulchugImgTrassa40,
        name: "Трасса №40",
        adress: "м. Новокузнецкая Садовническая набережная, 9",
        list: [
            { icon: houseIcon, title: "6 посадочных мест" },
            { icon: tableIcon, title: "Общий стол" },
            { icon: projectorIcon, title: "Флипчарт с маркерами" },
            { icon: tvIcon, title: "ТВ-плазма 55”" },
        ],
        price: "3000 ₽ / час",
        href: "SpaceinWidget.run('ff210f96-4c91-433f-922d-d056bb1a2fd3');",
        places: "6",
        available: true,
        btnText: 'Оставить заявку',
    },
    {
        img: bulchugImgMilford,
        name: "Милфорд",
        adress: "м. Новокузнецкая Садовническая набережная, 9",
        list: [
            { icon: houseIcon, title: "12 посадочных мест" },
            { icon: tableIcon, title: "Общий стол" },
            { icon: projectorIcon, title: "Флипчарт с маркерами " },
            { icon: tvIcon, title: "ТВ-плазма 75”" },
        ],
        price: "5000 ₽ / час",
        href: "SpaceinWidget.run('c7d0a8af-984d-4268-83f7-8e831ce74ccf');",
        places: "12",
        available: true,
        btnText: 'Оставить заявку',
    },
    {
        img: bulchugImgAmalfi,
        name: "Амальфи",
        adress: "м. Новокузнецкая Садовническая набережная, 9",
        list: [
            { icon: houseIcon, title: "8 посадочных мест" },
            { icon: tableIcon, title: "Общий стол" },
            { icon: projectorIcon, title: "Флипчарт с маркерами " },
            { icon: tvIcon, title: "ТВ-плазма 55”" },
        ],
        price: "4000 ₽ / час",
        href: "SpaceinWidget.run('186ee6f7-44a0-4060-98df-89ca4e4548d9');",
        places: "8",
        available: true,
        btnText: 'Оставить заявку',
    },
    {
        img: bulchugImgTransfegerashskoeShosse,
        name: "Трансфэгерашское шоссе",
        adress: "м. Новокузнецкая Садовническая набережная, 9",
        list: [
            { icon: houseIcon, title: "8 посадочных мест" },
            { icon: tableIcon, title: "Общий стол" },
            { icon: projectorIcon, title: "Флипчарт с маркерами " },
            { icon: tvIcon, title: "ТВ-плазма 55”" },
        ],
        price: "4000 ₽ / час",
        href: "SpaceinWidget.run('3486e7ce-0b4a-4cb5-9f00-86468bbc3d6c');",
        places: "8",
        available: true,
        btnText: 'Оставить заявку',
    },
    {
        img: bulchugImgHaivan,
        name: "Хайван",
        adress: "м. Новокузнецкая Садовническая набережная, 9",
        list: [
            { icon: houseIcon, title: "8 посадочных мест" },
            { icon: tableIcon, title: "Общий стол" },
            { icon: projectorIcon, title: "Флипчарт с маркерами " },
            { icon: tvIcon, title: "ТВ-плазма 55”" },
        ],
        price: "4000 ₽ / час",
        href: "SpaceinWidget.run('5e7d26b2-5d9b-4b48-a096-813ab767dc35');",
        places: "8",
        available: false,
        btnText: 'Оставить заявку',
    },
    {
        img: bulchugImgKonferentsZal,
        name: "Конференц зал",
        adress: "м. Новокузнецкая Садовническая набережная, 9",
        list: [
            { icon: houseIcon, title: "65 посадочных мест" },
            { icon: unionIcon, title: "Проектор и звуковая система" },
            { icon: chairIcon, title: "Кресла для выступающих" },
            { icon: projectorIcon, title: "Флипчарт с маркерами " },
        ],
        price: "12000 ₽ / час",
        href: "SpaceinWidget.run('9e0fe44c-8f7f-4463-9c55-20388f7c06db');",
        places: "65",
        available: true,
        btnText: 'Оставить заявку',
    },
];

export const blackRoomsArr = [
    {
        img: blackImgChuiskiyTrakt,
        name: "Чуйский тракт",
        adress: "м. Павелецкая Кожевническая улица, 14",
        list: [
            { icon: houseIcon, title: "8 посадочных мест" },
            { icon: tableIcon, title: "Общий стол" },
            { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт" },
            { icon: tvIcon, title:  "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
        ],
        price: "4000 ₽ / час",
        href: "SpaceinWidget.run('1e6ecb9a-e184-4dbd-97a6-2fa757078910');",
        places: "8",
        available: false,
        btnText: 'Нет мест',
    },
    {
      img: blackImgPamirskiyTrakt,
      name: "Памирский тракт",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "8 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "4000 ₽ / час",
      href: "SpaceinWidget.run('f2a170bd-c098-4d15-a354-9556ae27ee1a');",
      places: "8",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgVerdon,
      name: "Вердон",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "6 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title:  "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "3000 ₽ / час",
      href: "SpaceinWidget.run('19dd9e2b-13f7-4495-bd03-bbdf3928f8c3');",
      places: "6",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgStelvio,
      name: "Стельвио",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "6 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт" },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "3000 ₽ / час",
      href: "SpaceinWidget.run('5a1e175a-d66c-47d3-860b-6913d983dbf6');",
      places: "6",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgDalton,
      name: "Далтон",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "8 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "4000 ₽ / час",
      href: "SpaceinWidget.run('962f2f62-a46f-493f-8baf-5c060a00762f');",
      places: "8",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgBolshoyKrug,
      name: "Большой Круг",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "8 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "4000 ₽ / час",
      href: "SpaceinWidget.run('b3b33b9d-f598-441c-8859-84e014120661');",
      places: "8",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgDorogaTrolley,
      name: "Дорога Троллей",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "6 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "3000 ₽ / час",
      href: "SpaceinWidget.run('ff25bcf4-359c-45fc-8ede-7b6b184df402');",
      places: "6",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgTrassa60,
      name: "ТРАССА 60",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "8 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "4000 ₽ / час",
      href: "SpaceinWidget.run('0c38816a-4b21-46de-92d1-2edff7cbd789');",
      places: "8",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgTyanmen,
      name: "Тяньмэнь",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "6 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "3000 ₽ / час",
      href: "SpaceinWidget.run('4fd6513c-286a-45c2-8eb1-1d3b8a067ab3');",
      places: "6",
      available: false,
      btnText: 'Нет мест',
    },
    {
      img: blackImgGolian,
      name: "Голиань",
      adress: "м. Павелецкая Кожевническая улица, 14",
      list: [
        { icon: houseIcon, title: "8 посадочных мест" },
        { icon: tableIcon, title: "Общий стол" },
        { icon: projectorIcon, title: "Samsung Flip — цифровой флипчарт " },
        { icon: tvIcon, title: "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения", },
      ],
      price: "4000 ₽ / час",
      href: "SpaceinWidget.run('19612355-b762-481d-88c4-3daf902f2742');",
      places: "8",
      available: false,
      btnText: 'Нет мест',
    },
];