import { SwiperSlide } from "swiper/react";

import CustomSlider from "../customSlider/CustomSlider";
import "./servicesSlider.scss";





const ServicesSlider = ({ services, pagesStyle, sliderStyle, title="Услуги", description="В гибких офисах KNOW WHERE предусмотрены удобства и услуги для вашего комфорта" }) => {
    const setServices = services.map(({ icon, title }, i) => {
        return(
            <SwiperSlide>
                <div className="services-item" key={i}>
                    <img className="services-item__img" src={icon} alt={title} />
                    <h3 className="services-item__title">{title}</h3>
                </div>
            </SwiperSlide>
        );
	});

    return (
        <section className={'services ' + pagesStyle}>
            <div className="services__container container">
                <div className="services__heading">
                    <h2 className="services__title">{title}</h2>
                    <p className="services__descr">{description}</p>
                </div>
                <div className="services__slider">
                    <CustomSlider slides={setServices} style={sliderStyle} loop={false} />
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;