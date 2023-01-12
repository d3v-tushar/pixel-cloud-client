import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper sm:min-h-64"
      >
        <SwiperSlide><img className='w-full' src="https://i.ibb.co/8jfPjV9/pc01.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://i.ibb.co/ZdX8QkD/pc02.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://i.ibb.co/Kbb7WyX/pc04.png" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://i.ibb.co/3snNPJ0/pc03.png" alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;