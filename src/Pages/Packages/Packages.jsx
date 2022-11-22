import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../CustomHook/useTitle';
import Package from './Package';

const Packages = () => {
    const packages = useLoaderData();
    useTitle('Packages')
    return (
     
            <div className="py-5 dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold  dark:text-violet-400 lg:text-5xl">
              All Packages
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch -mx-4">
          {
            packages?.map((eachpackage, index) => <Package key={index} eachpackage={eachpackage}></Package>)
           }
          </div>
        </div>
      </div>
           
       
    );
};

export default Packages;