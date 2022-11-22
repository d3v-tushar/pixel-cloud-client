import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import Packages from '../Pages/Packages/Packages';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import NotFound from '../Pages/NotFound/NotFound';
import PackageDetails from '../Pages/Packages/PackageDetails';
import MyReviews from '../Pages/MyReviews/MyReviews';
import AddService from '../Pages/AddService/AddService';
import Gallary from '../Gallary/Gallary';


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/packages',
                element: <Packages></Packages>,
                loader: () => fetch('https://pixel-cloud-server.vercel.app/packages')
            },
            {
                path: 'packages/:id',
                element: <PackageDetails></PackageDetails>,
                loader: async({params}) => fetch(`https://pixel-cloud-server.vercel.app/packages/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: 'addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "/gallary",
                element: <Gallary></Gallary>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
    
]);

export default Routes;