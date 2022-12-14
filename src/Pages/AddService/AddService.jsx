import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../CustomHook/useTitle';

const AddService = () => {
  const { user, loading } = useContext(AuthContext);
  useTitle('Add Service');
  if(loading){
    return <div className="min-h-screen grid justify-center ">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-sky-400"></div>
    </div>
  };

  const handleAddPackage = (e) => {
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
    const features = [
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
      feature7,
    ];
    const publishTime = new Date().toLocaleString();
    const discription = form.discription.value;
    const publisher = user.displayName;

    //console.log(title, img, price, features, publishTime, discription, publisher);
    const newPackage = {
      title,
      img,
      price,
      features,
      publishTime,
      discription,
      publisher,
    };
    console.log(newPackage);

    fetch("https://pixel-cloud-server.vercel.app/packages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPackage),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Service Added Successfully!");
        form.reset();
      });
  };

  return (
    <div>
      <section className="p-0 dark:bg-gray-800 dark:text-gray-50">
        <h1 className="text-center text-4xl font-bold mb-4">
          Add Custom Package/ Service
        </h1>
        <form
          onSubmit={handleAddPackage}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add Custom Packages Here</p>
              <p className="text-xs">
                You can make your own custom order in just 5 minutes
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Package Title
                </label>
                <input
                  required
                  name="title"
                  id="firstname"
                  type="text"
                  placeholder="Title"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Image Url for the package
                </label>
                <input
                  required
                  name="img"
                  id="lastname"
                  type="text"
                  placeholder="600 x 400"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Price of the package
                </label>
                <input
                  required
                  name="price"
                  id="email"
                  type="number"
                  placeholder="Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Package Features
                </label>
                <input
                  required
                  name="feature1"
                  id="address"
                  type="text"
                  placeholder="Feature 1"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
                <input
                  required
                  name="feature2"
                  id="address"
                  type="text"
                  placeholder="Feature 2"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
                <input
                  required
                  name="feature3"
                  id="address"
                  type="text"
                  placeholder="Feature 3"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
                <input
                  required
                  name="feature4"
                  id="address"
                  type="text"
                  placeholder="Feature 4"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
                <input
                  required
                  name="feature5"
                  id="address"
                  type="text"
                  placeholder="Feature 5"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
                <input
                  required
                  name="feature6"
                  id="address"
                  type="text"
                  placeholder="Feature 6"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
                <input
                  required
                  name="feature7"
                  id="address"
                  type="text"
                  placeholder="Feature 7"
                  className="w-full my-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Discription
                </label>
                <textarea
                  required
                  name="discription"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-cyan-400 dark:border-gray-700 text-white"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button
                className="btn btn-lg btn-wide  btn-primary"
                type="submit"
              >
                Add Package
              </button>
            </div>
          </fieldset>
        </form>
        <ToastContainer />
      </section>
    </div>
  );
};

export default AddService;
