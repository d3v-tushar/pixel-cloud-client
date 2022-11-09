import React from "react";
import { Link } from "react-router-dom";
import HomePackages from "./HomePackages";
import HomeStats from "./HomeStats";
import logo from "../../assets/logo.png";

// import Banner from "./Banner";
import Carosel from "./Carosel";
import useTitle from "../../CustomHook/useTitle";

const Home = () => {
  useTitle('Home')
  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-gray-100">
      <main>
        <div className="container mx-auto space-y-16">
          <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-6">
            <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
              <span className="block mb-2 dark:text-violet-400">
                Pixel Cloud Photography
              </span>
              <img className="w-52 mx-auto" src={logo} alt="" />
              <p className="my-8">
                <span className="block mb-2 dark:text-violet-400">
                WE JUST LOVE TO CAPTURE PEOPLE IN LOVE.
                </span>
                
                We approach weddings in a documentary and artistic way, trying to tell the story of your day honestly and unobtrusively. Our images are warm, romantic, and intimate. We hope to give you images that make you feel, not just see.
              </p>
              <form
                noValidate=""
                action=""
                className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"
              >
                <button className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  Explore Gallary
                </button>
              </form>
            </div>
            <div className="w-full rounded-md xl:col-span-4">
              <Carosel></Carosel>
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
