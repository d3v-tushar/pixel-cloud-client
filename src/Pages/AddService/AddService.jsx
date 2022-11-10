import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext);
    const handleAddPackage = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const feature1 = form.feature1.value;
        const feature2 = form.feature2.value;
        const feature3 = form.feature3.value;
        const feature4 = form.feature4.value;
        const feature5 = form.feature5.value;
        const feature6 = form.feature6.value;
        const feature7 = form.feature7.value;
        const features = [feature1,feature2,feature3,feature4,feature5,feature6,feature7];
        const publishTime = new Date().toLocaleString();
        const discription = form.discription.value;
        const publisher = user.displayName;

        //console.log(title, img, price, features, publishTime, discription, publisher);
        const newPackage = {title, img, price, features, publishTime, discription, publisher};
        console.log(newPackage);
    }

    return (
        <div>
            <section className="p-0 dark:bg-gray-800 dark:text-gray-50">
                <h1 className='text-center text-4xl font-bold mb-4'>Add Custom Package/ Service</h1>
	<form onSubmit={handleAddPackage} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Add Custom Packages Here</p>
				<p className="text-xs">You can make your own custom order in just 5 minutes</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">Package Title</label>
					<input name='title' id="firstname" type="text" placeholder="Title" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Image Url for the package</label>
					<input name='img' id="lastname" type="text" placeholder="Image Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Price of the package</label>
					<input name='price' id="email" type="number" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Package Features</label>
					<input name='feature1' id="address" type="text" placeholder="Feature 1" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
					<input name='feature2' id="address" type="text" placeholder="Feature 2" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
					<input name='feature3' id="address" type="text" placeholder="Feature 3" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
					<input name='feature4' id="address" type="text" placeholder="Feature 4" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
					<input name='feature5' id="address" type="text" placeholder="Feature 5" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
					<input name='feature6' id="address" type="text" placeholder="Feature 6" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
					<input name='feature7' id="address" type="text" placeholder="Feature 7" className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">Discription</label>
                    <textarea name="discription" className='w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white' id="" cols="30" rows="10"></textarea>
				</div>
                <button className='btn btn-lg btn-wide  btn-primary' type="submit">Add Package</button>
			</div>
		</fieldset>
	</form>
        </section>
        </div>
    );
};

export default AddService;