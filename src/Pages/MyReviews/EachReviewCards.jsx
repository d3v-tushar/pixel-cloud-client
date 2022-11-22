import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsPatchCheckFill } from "react-icons/bs";

const EachReviewCards = ({ review, myreview, setMyReview }) => {
  const handleDelete = (review) => {
    console.log(`Deleting Review With Id: ${review._id}`);
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast("Review Deleted!");
          const remainingUsers = myreview.filter(
            (rvw) => rvw._id !== review._id
          );
          setMyReview(remainingUsers);
        }
      });
  };


  const handleUpdate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const updateMessage = e.target.message.value;
    const message = {message: updateMessage};
    fetch(`http://localhost:5000/reviews/${review._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(res => res.json())
    .then(data =>{
        if(data.modifiedCount > 0){
            toast('Review Updated');
            console.log(data);
            const filterd = myreview.filter(flter => flter._id !== review._id);
            const remaining = myreview.find(flter => flter._id === review._id);
            console.log(remaining);
            form.reset();
            // remaining[message] = message;
            // const currentReview = {...remaining};
            // console.log(currentReview)
            // currentReview.message = message;
            // const newUpdate = [...currentReview, filterd];
            // setMyReview(newUpdate);
            window.location.reload();
        }
    })
    
}

  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg lg:h-96 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={
                  review.picture
                    ? review.picture
                    : "https://source.unsplash.com/100x100/?portrait"
                }
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{review.name}</h4>
              <span className="text-xs dark:text-gray-400">
                {review.localTime}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{review.rate}</span>
          </div>
        </div>

        <div className="w-full ">
         <div className="grid grid-cols-3">
         <p className="mt-4 text-md font-semibold col-span-2 flex items-center"><span className="text-blue-600"><BsPatchCheckFill/></span><span className='text-yellow-400 mx-1'> {review.title}</span></p>
            <div className="flex justify-end items-end btn-group mt-4">
          <button
            onClick={() => handleDelete(review)}
            className="btn btn-sm btn-primary"
          >
            <RiDeleteBin5Line />
          </button>
          <label htmlFor="my-modal-3" className="btn btn-sm btn-accent">
            <BiEdit/>
          </label>
        </div>
         </div>
        <div className="divider"></div> 
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <h3>
            {review.message}
          </h3>
        </div>
 
      </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-3 text-center">
           Update Review Here
          </h3>
          <form onSubmit={handleUpdate}>
          <textarea required name='message' rows="3" placeholder="Message..." className="border w-full p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
          <div className="mx-auto my-2"><button type="submit" className="btn btn-primary">Update</button></div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EachReviewCards;
