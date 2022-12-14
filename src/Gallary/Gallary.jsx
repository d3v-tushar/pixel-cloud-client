import React from "react";
import useTitle from '../CustomHook/useTitle'

const Gallary = () => {
  useTitle('Gallary')
  return (
    <div>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Drone Videography
              </span>
              <h3 className="text-3xl font-bold">
                Workshop On Drone Videography/ Cinematography
              </h3>
              <p className="my-6 dark:text-gray-400">
              Creating a timeless look, coupled with a flawless moment. A photograph should<span>n't</span> just be a picture; it should be philosophy.
              </p>
              <button type="button" className="self-start">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free! Street Photography
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Outdoor Photography At a Glance!
              </p>
              <button type="button" className="self-start">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Workshop On Creative Photography
              </span>
              <h3 className="text-3xl font-bold">
                Our Aim to Capture Quality Photos
              </h3>
              <p className="my-6 dark:text-gray-400">
              We are very much attached with the conceptual Photography, 2days workshop made it more attached.
              </p>
              <button type="button" className="self-start">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallary;
