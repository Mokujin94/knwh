import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import ImagesItem from "../imagesItem/ImagesItem";


import "./galleryOfficePage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryOfficePage = ({ title, descr, deskImagesArr, mobImagesArr }) => {

    const windowInnerWidth = document.documentElement.clientWidth;

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 11,
        autoplay: true,
        speed: 60000,
        autoplaySpeed: 10,
        cssEase: "linear",
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
        cssEase: "linear",
        variableWidth: true,
        rows: 1,
        arrows: false,
        rtl: true,
    };

    const setDeskImages = deskImagesArr.map(({ img }, i) => {
        return (
            <ImagesItem img={img} key={i} />
        );
    });
    
    const setMobImages = mobImagesArr.map(({ img }, i) => {
        return (
            <SwiperSlide>
                <ImagesItem img={img} key={i} />
            </SwiperSlide>
        );
    });

    return (
        <section className="gallery">
            <div className="gallery__wrapper container">
                <div className="gallery__heading">
                    <h2 className="gallery__title">{title}</h2>
                    <p className="gallery__descr">{descr}</p>
                </div>

                <div className="gallery__slider">
                    {windowInnerWidth < 560 ? (
                    <>
                        <Slider {...settings}>{setMobImages}</Slider>
                        <Slider {...settings2}>{setMobImages}</Slider>
                    </>
                    ) : (
                        <Slider {...settings}>{setDeskImages}</Slider>
                    )}
                </div>
            </div>

        </section>
    )
};

export default GalleryOfficePage;