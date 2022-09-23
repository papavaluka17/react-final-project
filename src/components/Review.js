import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Review() {

    const { t } = useTranslation();

    return (
        <section className="s-5">
            <div className="review-box" >
                <h4>{t ("GUEST-REVIEW")}</h4>
                <span>***</span>
                <div className="Slider-box">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="slider-text">{t ("First-review")}</SwiperSlide>
                        <SwiperSlide className="slider-text"> {t ("Second-review")}</SwiperSlide>
                        <SwiperSlide className="slider-text">{t ("third-review")}</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}