import React from 'react';
import image1 from '../../assets/slider/s1.png';
import image2 from '../../assets/slider/s2.png';
import image3 from '../../assets/slider/s3.png';
import image4 from '../../assets/slider/s4.png';

const Carosel = () => {
    return (
        <div className="carousel w-full rounded-md xl:col-span-3">
        <div className="carousel-item w-full">
            <img src={image1} className="w-full" />
        </div> 
        <div className="carousel-item w-full">
            <img src={image2} className="w-full" />
        </div> 
        <div className="carousel-item w-full">
            <img src={image3} className="w-full" />
        </div> 
        <div className="carousel-item w-full">
            <img src={image4} className="w-full" />
        </div> 
        </div>
    );
};

export default Carosel;