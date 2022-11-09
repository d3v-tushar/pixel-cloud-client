import React from "react";
import { Link } from "react-router-dom";
import HomePackages from "./HomePackages";
import HomeStats from "./HomeStats";

const Home = () => {
  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
        <main>
          <div className="container mx-auto space-y-16">
            <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
              <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
                <span className="block mb-2 dark:text-violet-400">
                  Mamba design system
                </span>
                <h1 className="text-5xl font-extrabold dark:text-gray-50">
                  Build it with Mamba
                </h1>
                <p className="my-8">
                  <span className="font-medium dark:text-gray-50">
                    Modular and versatile.
                  </span>
                  The ultimate design toolkit for savvy technology startups.
                </p>
                <form
                  novalidate=""
                  action=""
                  className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
                >
                  <div>
                    <label for="name" className="text-sm sr-only">
                      Your name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                    />
                  </div>
                  <div>
                    <label for="lastname" className="text-sm sr-only">
                      Email address
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Email address"
                      className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700"
                    />
                  </div>
                  <button className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                    Join the waitlist
                  </button>
                </form>
              </div>
              <div className="carousel w-full rounded-md xl:col-span-3">
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
              </div>
            </section>
            <HomePackages></HomePackages>
            <HomeStats></HomeStats>
            
          </div>
        </main>
      </div>
  );
};

export default Home;
