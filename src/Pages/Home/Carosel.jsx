import React from "react";
import logo from './../../assets/logo.png';

const Carosel = ({slide}) => {
    const {image, id, prev, next} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
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
        </div> 
    
  );
};

export default Carosel;
