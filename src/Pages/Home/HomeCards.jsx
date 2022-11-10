import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeCards = ({ data }) => {
    const { features, price, img, title, _id } = data;
  return (
    <PhotoProvider>
      <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
       <PhotoView src={img}>
       <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
       </PhotoView>
        <div className="flex flex-col justify-between p-3 px-auto space-y-8">
          <div className="space-y-2">
          <div className="flex justify-between">
              <h2 className="text-4xl ml-2 my-4 font-semibold tracking-wide flex items-center">
                {title}
              </h2>
              <h4 className="text-3xl p-2 dark:bg-gray-500 rounded-3xl my-2 font-bold mr-2 text-yellow-400">${price}</h4>
            </div>
            <ul className="flex-1 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to={`/packages/${_id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default HomeCards;
