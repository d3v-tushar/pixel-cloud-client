import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import AddReview from "./AddReview";
import DisplayReview from "./DisplayReview";

export const ReviewContext = createContext();
const PackageReview = ({ packageId, title }) => {
  const { user } = useContext(AuthContext);
  const [savedReview, setSavedReview] = useState([]);
  useEffect(() => {
    fetch(`https://pixel-cloud-server.vercel.app/reviews?packageId=${packageId}`)
      .then((res) => res.json())
      .then((data) => setSavedReview(data));
  }, [packageId]);

  savedReview.sort(function (a, b) {
    return b.localTime.localeCompare(a.localTime);
    });

  const reviewinfo = { savedReview, setSavedReview };

  return (
    <ReviewContext.Provider value={reviewinfo}>
    <div className="flex flex-col w-full border-opacity-50">
    <div className="mt-5 divider">PIXEL CLOUD</div>
    </div>

      <section className="dark:bg-gray-900 dark:text-gray-100 mt-8">
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
            {
              savedReview.length === 0 &&
              <div>
                <h2 className="text-2xl text-center">No Reviews Were Added</h2>
              </div>
            }
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12 dark:bg-gray-900 dark:text-gray-100">
          {savedReview.map((review, index) => (<DisplayReview key={index} review={review}></DisplayReview>))}
        </section>

        <AddReview packageId={packageId} title={title}></AddReview>
      </div>
        </div>
      </section>
    </ReviewContext.Provider>
  );
};

export default PackageReview;
