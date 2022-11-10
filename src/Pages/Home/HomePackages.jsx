import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCards from "./HomeCards";

const HomePackages = () => {
	const [pack, setPack] = useState([]); 
	useEffect(() =>{
		fetch('https://pixel-cloud-server.vercel.app/packages/home')
		.then(res => res.json())
		.then(data => setPack(data))
	}, [])
  return (
    <section className="pt-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container px-4 mx-auto">
		<div className="max-w-2xl mx-auto mb-16 text-center">
			<span className="font-bold tracking-wider uppercase dark:text-violet-400">Packages</span>
			<h2 className="text-4xl font-bold lg:text-5xl">Choose Your Best Package</h2>
		</div>
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch -mx-4">
			{
				pack.map((data, index) => <HomeCards key={index} data={data}></HomeCards>)
			}
			</div>
		</div>
	</div>
    <div className="text-center mt-10">
    <Link to='/packages'><button type="button" className="px-10 py-3 font-semibold rounded-full text-xl dark:bg-gray-100 dark:text-gray-800">See All</button></Link>
    </div>
</section>
  );
};

export default HomePackages;
