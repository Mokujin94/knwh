import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SliderRooms from "../../components/sliderRooms/SliderRooms";

import "./rooms.scss";

import telegram from "../../ui/icons/footer/telegram.svg";
import vk from "../../ui/icons/footer/vk.svg";
import market from "../../ui/icons/footer/market.svg";
import store from "../../ui/icons/footer/store.svg";
import bulchugRoomsImg1 from "../balchug/img/rooms/1.png";
import bulchugRoomsImg2 from "../balchug/img/rooms/2.png";
import bulchugRoomsImg3 from "../balchug/img/rooms/3.png";
import bulchugRoomsImg4 from "../balchug/img/rooms/4.png";
import bulchugRoomsImg5 from "../balchug/img/rooms/5.png";
import bulchugRoomsImg5 from "../balchug/img/rooms/6.png";
import blackRoomsImg1 from "../black/img/rooms/1.jpg";
import blackRoomsImg2 from "../black/img/rooms/2.jpg";
import blackRoomsImg3 from "../black/img/rooms/3.jpg";
import blackRoomsImg4 from "../black/img/rooms/4.jpg";
import blackRoomsImg5 from "../black/img/rooms/5.jpg";
import blackRoomsImg6 from "../black/img/rooms/6.jpg";
import blackRoomsImg7 from "../black/img/rooms/7.jpg";
import blackRoomsImg8 from "../black/img/rooms/8.jpg";
import blackRoomsImg9 from "../black/img/rooms/9.jpg";
import blackRoomsImgDgakku from "../black/img/rooms/dgakku.jpg";
import стол from "../balchug/img/icons/стол.svg";
import дом from "../balchug/img/icons/дом.svg";
import проектор from "../balchug/img/icons/проектор.svg";
import тв from "../balchug/img/icons/тв.svg";
import union from "../balchug/img/icons/union.svg";
import стул from "../balchug/img/icons/стул.svg";
import FilterRooms from "../../components/filterRooms/FilterRooms";
import Footer from "../../components/footer/Footer";

const Rooms = () => {
    const bulchugRoomsArr = [
        {
            img: bulchugRoomsImg1,
            name: "Трасса №40",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "6 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами" },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "2000₽ / час",
            href: "SpaceinWidget.run('ff210f96-4c91-433f-922d-d056bb1a2fd3');",
            places: "6",
        },
        {
            img: bulchugRoomsImg2,
            name: "КОНФЕРЕНЦ-ЗАЛ",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "65 посадочных мест" },
                { icon: union, title: "Проектор и звуковая система" },
                { icon: стул, title: "Кресла для выступающих" },
                { icon: проектор, title: "Флипчарт с маркерами " },
            ],
            price: "9000₽ / час",
            href: "SpaceinWidget.run('9e0fe44c-8f7f-4463-9c55-20388f7c06db');",
            places: "65",
        },
        {
            img: bulchugRoomsImg3,
            name: "МИЛФОРД",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "12 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 75”" },
            ],
            price: "4000₽ / час",
            href: "SpaceinWidget.run('c7d0a8af-984d-4268-83f7-8e831ce74ccf');",
            places: "12",
        },
        {
            img: bulchugRoomsImg4,
            name: "ХАЙВАН",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('5e7d26b2-5d9b-4b48-a096-813ab767dc35');",
            places: "8",
        },
        {
            img: bulchugRoomsImg5,
            name: "АМАЛЬФИ",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('186ee6f7-44a0-4060-98df-89ca4e4548d9');",
            places: "8",
        },
        {
            img: bulchugRoomsImg6,
            name: "ТРАНСФЭГЕРАШСКОЕ ШОССЕ",
            adress: "м. Новокузнецкая Садовническая набережная, 9",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Флипчарт с маркерами " },
                { icon: тв, title: "ТВ-плазма 55”" },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('3486e7ce-0b4a-4cb5-9f00-86468bbc3d6c');",
            places: "8",
        },
    ];

    const blackRoomsArr = [
        {
            img: blackRoomsImg2,
            name: "ЧУЙСКИЙ ТРАКТ",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт" },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('1e6ecb9a-e184-4dbd-97a6-2fa757078910');",
            places: "8",
        },
        {
            img: blackRoomsImg3,
            name: "ПАМИРСКИЙ ТРАКТ",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('f2a170bd-c098-4d15-a354-9556ae27ee1a');",
            places: "8",
        },
        {
            img: blackRoomsImg9,
            name: "ВЕРДОН",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "6 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "2000₽ / час",
            href: "SpaceinWidget.run('19dd9e2b-13f7-4495-bd03-bbdf3928f8c3');",
            places: "6",
        },
        {
            img: blackRoomsImg8,
            name: "СТЕЛЬВИО",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "6 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "2000₽ / час",
            href: "SpaceinWidget.run('5a1e175a-d66c-47d3-860b-6913d983dbf6');",
            places: "6",
        },
        {
            img: blackRoomsImgDgakku,
            name: "ДАЛТОН",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('962f2f62-a46f-493f-8baf-5c060a00762f');",
            places: "8",
        },
        {
            img: blackRoomsImg1,
            name: "БОЛЬШОЙ КРУГ",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('b3b33b9d-f598-441c-8859-84e014120661');",
            places: "8",
        },
        {
            img: blackRoomsImg6,
            name: "ДОРОГА ТРОЛЛЕЙ",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "6 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "2000₽ / час",
            href: "SpaceinWidget.run('ff25bcf4-359c-45fc-8ede-7b6b184df402');",
            places: "6",
        },
        {
            img: blackRoomsImg5,
            name: "ТРАССА 60",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('0c38816a-4b21-46de-92d1-2edff7cbd789');",
            places: "8",
        },
        {
            img: blackRoomsImg7,
            name: "ТЯНЬМЭНЬ",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "6 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "2000₽ / час",
            href: "SpaceinWidget.run('4fd6513c-286a-45c2-8eb1-1d3b8a067ab3');",
            places: "6",
        },
        {
            img: blackRoomsImg4,
            name: "ГОЛИАНЬ",
            adress: "м. Павелецкая Кожевническая улица, 14",
            list: [
                { icon: дом, title: "8 посадочных мест" },
                { icon: стол, title: "Общий стол" },
                { icon: проектор, title: "Samsung Flip — цифровой флипчарт " },
                {
                    icon: тв,
                    title:
                        "ТВ-плазма 55» с технологией Airplay и дополнительным устройством для беспроводной передачи изображения",
                },
            ],
            price: "3000₽ / час",
            href: "SpaceinWidget.run('19612355-b762-481d-88c4-3daf902f2742');",
            places: "8",
        },
    ];

    const [filter, setFilter] = useState(bulchugRoomsArr);
    const [filterBlack, setFilterBlack] = useState(blackRoomsArr);

    const option = [
        { name: "Все" },
        { name: "до 65 мест" },
        { name: "до 12 мест" },
        { name: "до 8 мест" },
        { name: "до 6 мест" },
    ];

    const optionBlack = [
        { name: "Все" },
        { name: "до 8 мест" },
        { name: "до 6 мест" },
    ];

    const newFilter = (name) => {
        if (name === "Все") {
            setFilter(bulchugRoomsArr);
        } else if (name === "до 65 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "65";
            });
            setFilter(filtered);
        } else if (name === "до 12 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "12";
            });
            setFilter(filtered);
        } else if (name === "до 8 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "8";
            });
            setFilter(filtered);
        } else if (name === "до 6 мест") {
            const filtered = bulchugRoomsArr.filter((arr) => {
                return arr.places === "6";
            });
            setFilter(filtered);
        }
    };

    const newFilterBlack = (name) => {
        if (name === "Все") {
            setFilterBlack(blackRoomsArr);
        } else if (name === "до 65 мест") {
            const filtered = blackRoomsArr.filter((arr) => {
                return arr.places === "65";
            });
            setFilterBlack(filtered);
        } else if (name === "до 12 мест") {
            const filtered = blackRoomsArr.filter((arr) => {
                return arr.places === "12";
            });
            setFilterBlack(filtered);
        } else if (name === "до 8 мест") {
            const filtered = blackRoomsArr.filter((arr) => {
                return arr.places === "8";
            });
            setFilterBlack(filtered);
        } else if (name === "до 6 мест") {
            const filtered = blackRoomsArr.filter((arr) => {
                return arr.places === "6";
            });
            setFilterBlack(filtered);
        }
    };
    return (
        <>
            <section className="rooms-black">
                <div className="container">
                    <div className="rooms-black__header">
                        <div className="rooms-black__header-wrapper">
                            <h2 className="rooms-black__title">переговорные black</h2>
                            <p className="rooms-black__descr">
                                Комфортабельные ПК со всем необходимым для продуктивных встреч
                                недалеко от м.Павелецкая
                            </p>
                        </div>
                        <div className="rooms-black__header-right">
                            <FilterRooms onClick={newFilterBlack} option={optionBlack} />
                        </div>
                    </div>
                </div>
                <SliderRooms styles={""} color={""} border={""} arr={filterBlack} />
            </section>
            <section className="rooms-balchug">
                <div className="container">
                    <div className="rooms-balchug__header">
                        <div className="rooms-balchug__header-wrapper">
                            <h2 className="rooms-balchug__title">переговорные BALCHUG</h2>
                            <p className="rooms-balchug__descr">
                                На территории пространства вы можете забронировать как
                                переговорные комнаты, так и просторный конференц-зал на 65
                                посадочных мест
                            </p>
                        </div>
                        <div className="rooms-balchug__header-right">
                            <FilterRooms
                                onClick={newFilter}
                                option={option}
                                style={"bulchug"}
                            />
                        </div>
                    </div>
                </div>
                <SliderRooms
                    styles={"room__wrapper__balchug"}
                    color={"balchug__color"}
                    border={"balchug__border"}
                    arr={filter}
                />
            </section>
            <Footer style={"footer__white footer__primary"} />
        </>
    );
};

export default Rooms;
