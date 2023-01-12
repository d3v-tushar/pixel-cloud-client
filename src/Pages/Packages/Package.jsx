import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Package = ({ eachpackage }) => {
  const { features, price, img, title, _id } = eachpackage;
  return (
    <div className="relative block overflow-hidden group mx-5  dark:text-white border text-gray-900">
      <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={img}
        alt=""
        className="object-cover w-full h-64 transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative p-6 bg-white dark:bg-gray-700 border-gray-100">
        <h3 className="mt-4 text-2xl font-medium  dark:text-white text-gray-900">
          {title}
        </h3>

        <p className="mt-1.5 text-xl  dark:text-white text-gray-900">
          ${price}
        </p>

        <ul className=" dark:text-white text-gray-900  flex-1 space-y-2 my-3">
          {features?.map((feature, index) => (
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

        <Link className="mt-4" to={`/packages/${_id}`}>
          <button className="block w-full p-4 text-sm text-gray-700 transition bg-yellow-400 rounded font-semibold hover:scale-105">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Package;
