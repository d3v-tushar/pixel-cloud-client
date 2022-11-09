import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer'


const Main = () => {
    return (
        <div className="min-h-screen px-6 space-y-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="p-6 space-y-8">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
            

            {/* <div className="carousel w-full rounded-md xl:col-span-3">
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div> 
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div> 
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div> 
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div> 
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div> 
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div> 
        <div className="carousel-item w-1/2">
            <img src="https://placeimg.com/256/400/arch" className="w-full" />
        </div>
        </div> */}
        </div>
    );
};

export default Main;