import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesSlider = ({ services, pagesStyle, title, description }) => {


    return (
        <section className={'services ' + pagesStyle}>
            <div className="services__container container">
                <div className="services__heading">
                    <h2 className="services__title">{title}</h2>
                    <p className="services__desc">{description}</p>
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
                    style={pagesStyle}
                />
            </div>
        </section>
    );
};

export default ServicesSlider;