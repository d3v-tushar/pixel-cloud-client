import React from "react";
import { Link } from "react-router-dom";

const Package = ({eachpackage}) => {
    const {features, price, img, title, _id} = eachpackage;
  return (
    <div>
        <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-3 px-auto space-y-8">
		<div className="space-y-2">
			<div>
            <h2 className="text-4xl my-4 font-semibold tracking-wide">{title}</h2>
            <h4 className="text-xl mb-4 ">${price}</h4>
            </div>
            <ul className="flex-1 space-y-2">
                  {
                    features.map((feature, index) =>
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
                  </li>)
                  }
                </ul>
		</div>
		<Link to={`/packages/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Learn More</button></Link>
	</div>
</div>
      {/* <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-auto lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-400 dark:text-gray-900">
              <div>
                <img src={img} alt="" />
                </div>
                <div className="space-y-2">    
                  <h4 className="text-2xl font-bold">{title}</h4>
                  <span className="text-6xl font-bold">
                    ${eachpackage.price}
                  </span>
                </div>
               
                <ul className="flex-1 space-y-2">
                  {
                    features.map((feature, index) =>
                    <li className="flex items-center space-x-2">
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
                  </li>)
                  }
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400"
                >
                  Get Started
                </a>
              </div>
            </div> */}
    </div>
  );
};

export default Package;

 {/* <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Beginner</h4>
                  <span className="text-6xl font-bold">Free</span>
                </div>
                <p className="mt-3 leading-relaxed dark:text-gray-400">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="flex-1 mb-6 dark:text-gray-400">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Aenean quis</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Morbi semper</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Tristique enim nec</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-400 dark:text-gray-900"
                >
                  Get Started
                </button>
              </div>
            </div> */}


            
            
