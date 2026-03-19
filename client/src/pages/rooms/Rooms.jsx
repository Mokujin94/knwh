import React, { useState } from "react";
import SliderRooms from "../../components/sliderRooms/SliderRooms";

import "./rooms.scss";

import { blackRoomsArr, bulchugRoomsArr } from "../../data/rooms";
import FilterRooms from "../../components/filterRooms/FilterRooms";
import Footer from "../../components/footer/Footer";

const Rooms = ({ setForm, setActiveMail, setDefaultRate, setActiveRate }) => {

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
                    roomsType={"Balchug"}
                    setForm={setForm}
                    setActiveMail={setActiveMail}
                    setDefaultRate={setDefaultRate}
                    setActiveRate={setActiveRate}
                />
            </section>
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
                <SliderRooms 
                    styles={""} 
                    color={""} 
                    border={""} 
                    arr={filterBlack} 
                    roomsType={"Black"}
                    setForm={setForm}
                    setActiveMail={setActiveMail}
                    setDefaultRate={setDefaultRate}
                    setActiveRate={setActiveRate}
          />
            </section>
            <Footer style={""} />
        </>
    );
};

export default Rooms;
