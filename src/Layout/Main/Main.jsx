import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer'
import { useState } from 'react';
import { useEffect } from 'react';


const Main = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() =>{
        setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    }, [darkMode]);
    return (
        <section className={darkMode ? "dark" : undefined}>
            <div className="font-mono min-h-screen px-6 space-y-8  bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            <div className="p-6 space-y-8">
            <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
        </section>
    );
};

export default Main;