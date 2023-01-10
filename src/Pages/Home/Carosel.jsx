import React from "react";
import logo from './../../assets/logo.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Carosel = ({slide}) => {
    const {image, id, prev, next} = slide;
  return (
   <>
    {/* <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img w-full'>
        <img src={image} alt='' className="rounded-xl min-w-screen" />
        </div>
            <div className=" grid justify-center align-middle w-72 items-center">
               <div className="absolute">
               <img src={logo} alt="" />
               </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>  */}

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
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
   </>
    
  );
};

export default Carosel;
