import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import AddReview from "./AddReview";
import DisplayReview from "./DisplayReview";

export const ReviewContext = createContext();
const PackageReview = ({ packageId }) => {
  const { user } = useContext(AuthContext);
  const { _id } = user;
  const [savedReview, setSavedReview] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?packageId=${_id}`)
      .then((res) => res.json())
      .then((data) => setSavedReview(data));
  }, [packageId]);

  savedReview.sort(function (a, b) {
    return b.localTime.localeCompare(a.localTime);
    });

  const reviewinfo = { savedReview, setSavedReview };

  return (
    <ReviewContext.Provider value={reviewinfo}>
      {/* <div>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12 dark:bg-gray-800 dark:text-gray-100">
          {savedReview.map((review, index) => (<DisplayReview key={index} review={review}></DisplayReview>))}
        </section>

        <AddReview packageId={packageId}></AddReview>
      </div> */}
    <div className="flex flex-col w-full border-opacity-50">
    <div className="mt-5 divider">PIXEL CLOUD</div>
    </div>

      <section className="dark:bg-gray-800 dark:text-gray-100 mt-8">
        <div className="container max-w-xl p-6 py-2 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              Client Reviews
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
             Total Review: {savedReview.length}
            </p>
          </div>
          <div>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12 dark:bg-gray-800 dark:text-gray-100">
          {savedReview.map((review, index) => (<DisplayReview key={index} review={review}></DisplayReview>))}
        </section>

        <AddReview packageId={packageId}></AddReview>
      </div>
        </div>
      </section>
    </ReviewContext.Provider>
  );
};

export default PackageReview;
