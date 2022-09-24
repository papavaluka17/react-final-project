import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect } from "react";

export default function Review() {

    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({ duration: 1500 })
      }, [])

    return (
        <section data-aos="fade-up" className="s-5">
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