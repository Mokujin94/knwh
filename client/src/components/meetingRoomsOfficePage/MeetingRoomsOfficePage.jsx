import { useState } from "react";
import FilterRooms from "../filterRooms/FilterRooms";
import SliderRooms from "../sliderRooms/SliderRooms";

import "./meetingRoomsOfficePage.scss";

const MeetingRoomsOfficePage = ({ title, descr, roomsArr, filterArr, roomsType, filterStyle, roomsStyles, setForm, setActiveMail, setDefaultRate, setActiveRate }) => {

    const [filter, setFilter] = useState(roomsArr);

    const newFilter = (name) => {
        if (name === "Все") {
            setFilter(roomsArr);
        } else if (name === "65 мест") {
            const filtered = roomsArr.filter((arr) => {
                return arr.places === "65";
            });
            setFilter(filtered);
        } else if (name === "12 мест") {
            const filtered = roomsArr.filter((arr) => {
                return arr.places === "12";
            });
        setFilter(filtered);
        } else if (name === "до 8 мест") {
            const filtered = roomsArr.filter((arr) => {
                return arr.places === "8";
            });
        setFilter(filtered);
        } else if (name === "до 6 мест") {
            const filtered = roomsArr.filter((arr) => {
                return arr.places === "6";
            });
            setFilter(filtered);
        }
    };

    return (
        <section className="rooms-section">
            <div className="rooms-section__wrapper">
                <div className="rooms-section__top-flex container">
                    <div className="rooms-section__heading">
                        <h2 className="rooms-section__title">{title}</h2>
                        <p className="rooms-section__descr">{descr}</p>
                    </div>

                    <FilterRooms onClick={newFilter} option={filterArr} style={filterStyle} />
                </div>
                <div className="rooms-section__slider">
                    <SliderRooms
                        styles={roomsStyles.styles}
                        color={roomsStyles.color}
                        border={roomsStyles.border}
                        clame={roomsStyles.clame}
                        arr={filter}
                        roomsType={roomsType}
                        setForm={setForm}
                        setActiveMail={setActiveMail}
                        setDefaultRate={setDefaultRate}
                        setActiveRate={setActiveRate}
                    />
                </div>
            </div>
        </section>
    )
};

export default MeetingRoomsOfficePage;