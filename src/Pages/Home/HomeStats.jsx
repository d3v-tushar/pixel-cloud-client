import React from 'react';

const HomeStats = () => {
    return (
        <div>
			<h2 className="text-4xl mt-5 mb-3 font-bold lg:text-5xl text-center">Statistics</h2>
            <section className="p-6 rounded-md  dark:bg-gray-900">
	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">90+</p>
			<p className="text-sm sm:text-base">Clients</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">79K</p>
			<p className="text-sm sm:text-base">Followers</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
			<p className="text-sm sm:text-base">Workshops</p>
		</div>
	</div>
</section>
        </div>
    );
};

export default HomeStats;