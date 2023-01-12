import React from "react";
import HomePackages from "./HomePackages";
import HomeStats from "./HomeStats";
import image1 from "../../assets/slider/s1.png";
import image2 from "../../assets/slider/s2.png";
import image3 from "../../assets/slider/s3.png";
import image4 from "../../assets/slider/s4.png";

import Carosel from "./Carosel";
import useTitle from "../../CustomHook/useTitle";
import HomeTeam from "./HomeTeam";
import Slider from "./Slider";

const Home = () => {
  useTitle('Home');
  const sliderData = [
    {
      image: image1,
      prev: 4,
      id: 1,
      next: 2
  },
  {
      image: image2,
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: image3,
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: image4,
      prev: 3,
      id: 4,
      next: 1
  }
];
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-100">
      <main>
        <div className="container mx-auto space-y-16">
          <section className="">
            {/* <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-900">
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
            </div> */}
            {/* <div className="carousel w-full py-10">
              {
                sliderData.map(slide => <Carosel 
                  key={slide.id}
                  slide={slide}></Carosel>)
              }
            </div> */}
            <Slider></Slider>
          </section>
          <HomePackages></HomePackages>
          {/* <HomeStats></HomeStats> */}
          <HomeTeam></HomeTeam>
        </div>
      </main>
    </div>
  );
};

export default Home;
