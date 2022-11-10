import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../Context/AuthProvider';
import { ReviewContext } from './PackageReview';

const AddReview = ({packageId, title}) => {
    const {user} = useContext(AuthContext);
    const [rating, setRating] = useState(1);
    const {savedReview, setSavedReview} = useContext(ReviewContext);

    const handleReview = (e) =>{
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        const rate = rating;
        const name = user.displayName;
        const email = user.email;
        const picture = user.photoURL;
        const localTime = new Date().toLocaleString();
       console.log(title);
        const review = {packageId, title, name, email, picture, message, rate, localTime};

        fetch('https://pixel-cloud-server.vercel.app/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                let newDisplayReview = [...savedReview];
                let addNew = newDisplayReview.unshift(review);
                setSavedReview(newDisplayReview);
                toast('Review Added Successfully!');
                form.reset();
            }
        })
    }
    return (
        <>
        <div className="grid justify-center my-4">
        {
          user?.uid ? <label htmlFor="my-modal-3" className="btn btn-wide">Add Review</label> :
          <Link to='/login' state={{from : location}} replace><button className="btn btn-primary btn-wide">Login To Add Review</button></Link>
        }
        </div>
  
      {/* ---------Modal---------- */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
          <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex flex-col items-center w-full">
                  <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                  <div className="flex flex-col items-center py-6 space-y-3">
                      <span className="text-center">How was your experience?</span>
                      <div className="flex space-x-3">
                          <button onClick={() => setRating(1)} type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                          </button>
                          <button onClick={() => setRating(2)} type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                          </button>
                          <button onClick={() => setRating(3)} type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                          </button>
                          <button onClick={() => setRating(4)} type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                          </button>
                          <button onClick={() => setRating(5)} type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                          </button>
                      </div>
                  </div>
                  <form onSubmit={handleReview} className="flex flex-col w-full">
                      <textarea required name='message' rows="3" placeholder="Message..." className="border p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                      <button type="submit" htmlFor="my-modal-3" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Leave feedback</button>
                  </form>
              </div>
              </div>
          </div>
          <ToastContainer />
          </div>
        </>
    );
};

export default AddReview;