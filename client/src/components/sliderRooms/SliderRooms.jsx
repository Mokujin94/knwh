import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";
import "./sliderRooms.scss";

import background from "../sliderHome/img/background.png";
import background2 from "../sliderHome/img/bg2.png";
// import background3 from './img/bg3.png';
// import background4 from './img/bg4.png';
// import background5 from './img/bg5.png';

import tv from "./icons/tv.svg";
import places from "./icons/places.svg";
import table from "./icons/table.svg";
import flipchart from "./icons/flipchart.svg";
import nextIcon from "../../ui/icons/sliderBlack/nextIcon.svg";
import prevIcon from "../../ui/icons/sliderBlack/prevIcon.svg";

const icon = {
    nextIcon: (
        <span className="glyphicon glyphicon-glass">
            <img src={nextIcon} alt="nextIcon" />
        </span>
    ),
    prevIcon: (
        <span className="glyphicon glyphicon-glass">
            <img src={prevIcon} alt="prevIcon" />
        </span>
    ),
};

const SliderRooms = ({ styles, color, border, arr, clame }) => {
    const items = arr.map(({ img, name, list, price, href }, i) => {
        return (
            <Carousel.Item key={i}>
                <div className="container">
                    <div className="rooms">
                        <div
                            className={styles ? `rooms__wrapper ${styles}` : `rooms__wrapper`}
                        >
                            <div className="rooms__left">
                                <img src={img} alt="img" className="rooms__img" />
                            </div>
                            <div className="rooms__right">
                                <div className="rooms__header">
                                    <h2 className={`rooms__title ${color}`}>{name}</h2>
                                    {/* <p className={`rooms__descr ${color}`}>{adress}</p> */}
                                </div>
                                <div className="rooms__menu">
                                    <ul className="rooms__list">
                                        {list.map(({ icon, title }, i) => {
                                            return (
                                                <li className={`rooms__item ${border}`} key={i}>
                                                    <div className="rooms__icon-block">
                                                        <img
                                                            src={icon}
                                                            alt="icon"
                                                            className="rooms__icon"
                                                        />
                                                    </div>
                                                    <p className={`rooms__menu-title ${color}`}>
                                                        {title}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className={`rooms__price ${color}`}>{price}</div>
                                {name == "ДАЛТОН" ||
                                    name == "БОЛЬШОЙ КРУГ" ||
                                    name == "ЧУЙСКИЙ ТРАКТ" ||
                                    name == "КОНФЕРЕНЦ-ЗАЛ" ||
                                    name == "ДОРОГА ТРОЛЛЕЙ" ||
                                    name == "ВЕРДОН" ||
                                    name == "СТЕЛЬВИО" ||
                                    name == "ТРАССА 60" ||
                                    name == "ТЯНЬМЭНЬ" ||
                                    name == "ХАЙВАН" ||
                                    name == "ГОЛИАНЬ" ? (
                                    <a
                                        style={{ opacity: "0.5" }}
                                        className={`rooms__btn ${color}`}
                                    >
                                        Недоступно
                                    </a>
                                ) : (
                                    <a
                                        href="javascript:void(0)"
                                        onClick={() => eval(href)}
                                        className={`rooms__btn ${color}`}
                                    >
                                        Забронировать
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        );
    });

    return (
        <Carousel
            nextIcon={icon.nextIcon}
            prevIcon={icon.prevIcon}
            indicators={false}
            className={clame ? `carousel-rooms ${clame}` : "carousel-rooms"}
            fade
        >
            {items}
        </Carousel>
    );
};

export default SliderRooms;
