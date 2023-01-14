import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../CustomHook/useTitle";
import EachReviewCards from "./EachReviewCards";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, loading } = useContext(AuthContext);
  // if(loading){
  //   return <div className="min-h-screen grid justify-center ">
  //     <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-sky-400"></div>
  //   </div>
  // };
  // const [myreview, setMyReview] = useState([]);
  //console.log(myreview);
  // if(myreview.length > 0){
  //   myreview.sort(function(x,y){
  //     return y.localTime.localeCompare(x.localTime);
  //   });
  // };

  // useEffect(() => {
  //   fetch(`https://pixel-cloud-server.vercel.app/myreviews?email=${user?.email}`,{
  //     headers: {
  //       authorization : `Bearer ${localStorage.getItem('auth-token')}`
  //     }
  //   })
  //     .then((res) =>{
  //       if(res.status === 401 || res.status === 403){
  //         logOut();
  //       }
  //       return res.json()
  //     })
  //     .then((data) => setMyReview(data));
  // }, [user?.email, logOut]);

  const { data: myreview = [], isloading, isFetching, refetch } = useQuery({
    queryKey: ['myReviews'], 
    queryFn: async() => {
      const res = await fetch(`https://pixel-cloud-server.vercel.app/myreviews?email=${user?.email}`,{
         headers: {
           authorization : `Bearer ${localStorage.getItem('auth-token')}`
         }});
      const data = await res.json();
      return data;
 }});

  if(myreview.length > 0){
      myreview.sort(function(x,y){
      return y.localTime.localeCompare(x.localTime);
    });
  };

  if(isloading && loading && isFetching){
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
  };

  return (
    <div>
      <section className="min-h-screen dark:bg-gray-900 dark:text-gray-100 w-full">
        <div className="container dark:bg-gray-900 dark:text-gray-100 max-w-xl lg:p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">
              My Reviews: {myreview.length}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
              You Can Edit & Detele Your Reviews Here
            </p>
          </div>
          <div className="w-full">
          {
              myreview.length === 0 &&
              <div>
                <h1 className="text-2xl text-center">No Reviews Were Added Yet</h1>
              </div>
            }
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
           
            {myreview.length > 0 && myreview.map((review, index) => (
              <EachReviewCards
                key={index}
                review={review}
                refetch={refetch}
                myreview={myreview}
              ></EachReviewCards>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
