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
                loader: () => fetch('http://localhost:5000/packages')
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
    
]);

export default Routes;