import React from "react";
import { useLoaderData } from "react-router-dom";
import PackageReview from "./PackageReview";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PackageDetails = () => {
    const details = useLoaderData();
    const {img, title, discription, features, price, _id} = details;
    const mainFeatures = features.slice(0, 5);
  return (
    <PhotoProvider>
    <div>
      <section className="dark:bg-gray-900 dark:text-gray-100">
        <div className="container max-w-xl p-6 py-2 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              {title}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
              {discription}
            </p>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">


                <div className=" space-y-10">
                  {
                    mainFeatures.map((feature, index) =>
                    <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl mt-2 font-medium dark:text-gray-50">
                        {feature}
                      </h4>
                    </div>
                  </div>
                  )}
                   <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl mt-2 font-medium dark:text-gray-50">
                       Booking Fee: <span className="text-yellow-400">${price}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <PhotoView src={img}>
                <img
                  src={img}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
                </PhotoView>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
     <PackageReview packageId={_id} title={title}></PackageReview>
    </div>
    </PhotoProvider>
  );
};

export default PackageDetails;
