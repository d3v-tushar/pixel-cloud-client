import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCards from "./HomeCards";

const HomePackages = () => {
  const [pack, setPack] = useState([]);
  useEffect(() => {
    fetch("https://pixel-cloud-server.vercel.app/packages/home")
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);
  return (
    <section className="pt-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Packages
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch -mx-4">
            {pack.map((data, index) => (
              <HomeCards key={index} data={data}></HomeCards>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to="/packages">
          <button
            type="button"
            className="btn-info px-10 py-3 font-semibold rounded-full text-xl dark:bg-gray-100 dark:text-gray-800"
          >
            See All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePackages;
