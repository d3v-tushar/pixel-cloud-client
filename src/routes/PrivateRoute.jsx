import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { ClipLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
        <div className='min-h-screen grid justify-center mt-5'>
        <ClipLoader color="#13bad1" />
        </div>
        )
    }
    if(user && user.uid){
       return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;