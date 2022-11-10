import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../CustomHook/useTitle';
import EachReviewCards from './EachReviewCards';

const MyReviews = () => {
    const [spinner, setSpinner] = useState(true);
    const {user} = useContext(AuthContext);
    const [myreview, setMyReview] = useState([]);
    useTitle('My Reviews')
    useEffect(() =>{
        fetch(`https://pixel-cloud-server.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyReview(data))
        setSpinner(false);
    }, [user]);
    if (spinner) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
        </div>
      );
    }
    
    console.log(myreview);
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">My Reviews</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">You Can Edit & Detele Your Reviews Here</p>
		</div>
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {
            myreview.map((review, index) => <EachReviewCards key={index} review={review} setMyReview={setMyReview} myreview={myreview}></EachReviewCards>)
        }
        </div>
	</div>
</section>
        </div>
    );
};

export default MyReviews;