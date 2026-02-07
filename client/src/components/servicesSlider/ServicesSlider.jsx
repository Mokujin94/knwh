import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import FlipSlider from "../../components/flipSlider/FlipSlider";
import ServicesBlock from "../../components/servicesBlock/ServicesBlock";
import "./servicesSlider.scss";



const ServicesSlider = ({ services, pagesStyle, title, description }) => {
    const [flip, setFlip] = useState(0);
    
    const windowInnerWidth = document.documentElement.clientWidth;
    const countPounts = windowInnerWidth / 388;
    const countPounts1 = windowInnerWidth / 250;

    let itemsAll = services.length;
    let itemsTranslate = itemsAll / 4;
    let translate = 368 * itemsTranslate;
    let translate1440 = 285 * itemsTranslate;

    const flipLeft = () => {
        if (windowInnerWidth > 1440) {
            flip <= -3864 ? setFlip(0) : setFlip((flip) => flip - translate);
        } else {
            flip <= -2980 ? setFlip(0) : setFlip((flip) => flip - translate1440);
        }
    };
    const flipRight = () => {
        if (windowInnerWidth > 1440) {
            flip >= 0 ? setFlip(0) : setFlip((flip) => flip + translate);
        } else {
            flip >= 0 ? setFlip(0) : setFlip((flip) => flip + translate1440);
        }
    };

    const setServices = services.map(({ icon, title }, i) => {
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


    return (
        <section className={'services ' + pagesStyle}>
            <div className="services__container container">
                <div className="services__heading">
                    <h2 className="services__title">{title ? title : "Услуги"}</h2>
                    <p className="services__descr">{description ? description : "В гибких офисах KNOW WHERE предусмотрены удобства и услуги для вашего комфорта"}</p>
                </div>
                <div className="services__slider">
                    {windowInnerWidth <= 900 ? (
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode]}
                            className="mySwiper"
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
                            {setServices}
                        </Swiper>
                    ) : (
                        setServices
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
                    style={pagesStyle}
                />
            </div>
        </section>
    );
};

export default ServicesSlider;