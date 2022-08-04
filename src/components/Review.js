import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Review() {
    return (
        <section className="s-5">
            <div className="review-box" >
                <h4>GUEST REVIEW</h4>
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
                        <SwiperSlide className="slider-text">"We are glad that we spent the holidays in your hotel"</SwiperSlide>
                        <SwiperSlide className="slider-text"> "Thanks for a good rest and fun"</SwiperSlide>
                        <SwiperSlide className="slider-text">"Thanks for the good environment and happy time. We will visit you again."</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}