
import { SwiperSlide } from "swiper/react";
import Applications from "../applications/Applications";
import CustomSlider from "../customSlider/CustomSlider";

import "./aboutSlider.scss";

const AboutSlider = ({ array, setForm, title="СМИ о нас" }) => {

    const setArrayItems = array.map(({ img, descr, link }, i) => {
        return (
            <SwiperSlide>
                <a className="about-item" href={link} target='_blank'>
                    <div className="about-item__img-wrap">
                        <img className="about-item__img" src={img} alt={descr} />
                    </div>
                    <h3 className="about-item__title">{descr}</h3>
                </a>
            </SwiperSlide>
        );
    });

    return(
        <section className="about">
            <div className="about__wrapper container">
                <h2 className="about__title">{title}</h2>
                <div className="about__slider">
                    <CustomSlider slides={setArrayItems} />
                </div>

                <Applications
                    title="Стать нашим партнером"
                    descr="Мы рады сотрудничеству, рассматриваем все заявки!"
                    button="Оставить заявку"
                    setForm={setForm}
                />

                {/* <script id="amoforms_script_1097978"  charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1678782043"></script> */}
            </div>
        </section>
    );
};

export default AboutSlider;