import { Swiper } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './customSlider.scss';

const CustomSlider = ({ slides, style='black', loop=true }) => {
    return(
        <div className={`custom-slider custom-slider_${style}`} >
            <Swiper
                spaceBetween={30}
                slidesPerView={'auto'}
                freeMode={true}
                grabCursor={true}
                pagination={{
                    type: 'progressbar',
                    clickable: true,
                }}
                loop={loop}
                navigation={true}
                modules={[Pagination, Navigation, FreeMode]}
                breakpoints={{
                    921: {
                        spaceBetween: 40,
                    },
                }}
                className="mySwiper"
            >
                {slides}
            </Swiper>
        </div>
    );
};

export default CustomSlider;