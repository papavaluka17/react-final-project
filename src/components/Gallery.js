import { useTranslation } from "react-i18next";

// import images
import breakfast from "../images/breakfast.jpg"
import minipool from "../images/minipool.webp"
import bathroom from "../images/bathroom.jpg"
import garden2 from "../images/garden2.jpg"
import garden3 from "../images/garden3.jpg"
import balcony from "../images/balcony.jpg"
import garden4 from "../images/garden4.jpg"

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function Gallery() {

  const { t } = useTranslation();
  
  return (
    <div className="Slider" id="Gallery">
      <h4>{t ("GALLERY")}</h4>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500:{
            slidesPerView: 1,
          },
          880: {
            slidesPerView: 2,
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        <SwiperSlide ><img className="img"  src={breakfast} alt="breakfast" /></SwiperSlide>
        <SwiperSlide ><img className="img" src={minipool} alt="minipool" /></SwiperSlide>
        <SwiperSlide ><img className="img" src={bathroom} alt="bathroom" /></SwiperSlide>
        <SwiperSlide ><img className="img" src={garden2} alt="garden2" /></SwiperSlide>
        <SwiperSlide ><img className="img" src={garden3} alt="garden3" /></SwiperSlide>
        <SwiperSlide ><img className="img" src={garden4} alt="garden4" /></SwiperSlide>
        <SwiperSlide ><img className="img" src={balcony} alt="balcony" /></SwiperSlide>

      </Swiper>
    </div>

  );
}

