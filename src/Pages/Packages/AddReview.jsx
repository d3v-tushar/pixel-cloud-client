import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../Context/AuthProvider';
import { ReviewContext } from './PackageReview';

const AddReview = ({packageId, title}) => {
    const {user} = useContext(AuthContext);
    const [rating, setRating] = useState(5);
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

        fetch('http://localhost:5000/reviews', {
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
          user?.uid ? <label htmlFor="my-modal-3" className="btn btn-secondary btn-wide">Add Review</label> :
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

                    <div className="rating">
                    <input onClick={() => setRating(1)} type="radio" name="rating-2" className="mask mask-star-2 mx-1 bg-orange-400" />
                    <input onClick={() => setRating(2)} type="radio" name="rating-2" className="mask mask-star-2 mx-1 bg-orange-400" />
                    <input onClick={() => setRating(3)} type="radio" name="rating-2" className="mask mask-star-2 mx-1 bg-orange-400" />
                    <input onClick={() => setRating(4)} type="radio" name="rating-2" className="mask mask-star-2 mx-1 bg-orange-400" />
                    <input onClick={() => setRating(5)} type="radio" name="rating-2" className="mask mask-star-2 mx-1 bg-orange-400" />
                    </div>

                      </div>
                  </div>
                  <form onSubmit={handleReview} htmlFor="my-modal-3" className="flex flex-col w-full">
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