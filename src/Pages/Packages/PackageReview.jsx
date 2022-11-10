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
    return b.time.localeCompare(a.time);
    });
    
  const reviewinfo = { savedReview, setSavedReview };

  return (
    <ReviewContext.Provider value={reviewinfo}>
      <div>
        <h2>Reviews: {savedReview.length}</h2>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12 dark:bg-gray-800 dark:text-gray-100">
          {savedReview.map((review, index) => (<DisplayReview key={index} review={review}></DisplayReview>))}
        </section>

        <AddReview packageId={packageId}></AddReview>
      </div>
    </ReviewContext.Provider>
  );
};

export default PackageReview;
