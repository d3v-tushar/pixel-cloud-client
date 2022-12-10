import React, { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
     //User Log Out
     const handleLogOut = () =>{
      logOut()
      .then(() => console.log('User Logged Out'))
      .catch(error => console.error(error.message))
  };

  const linkCSS = 'flex items-center mx-3 px-4 -mb-1 border-b-2 dark:border-transparent font-semibold';
  const active = 'flex items-center mx-3 px-4 -mb-1 border-b-2 dark:border-transparent font-semibold dark:text-violet-400 dark:border-violet-400';
  return (
    <div>
      <header className="container px-2 mx-auto rounded dark:bg-gray-900">
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
            <NavLink className={({isActive}) => isActive ? active : linkCSS} to='/packages'>Packages</NavLink>
            </li>
            <li className="flex">
            <NavLink className={({isActive}) => isActive ? active : linkCSS} to='/gallary'>Gallary</NavLink>
            </li>
            {
              user?.uid && <li className="flex">
              <NavLink className={({isActive}) => isActive ? active : linkCSS} to='/myreviews'>My Reviews</NavLink>
              </li>
            }
          </ul>
            <NavLink className={({isActive}) => isActive ? active : linkCSS} to='/home'><h2 className="text-xl font-bold">Pixel Cloud</h2></NavLink>
            
            {/* <img className="h-20" src={Logo} alt="" /> */}
          {/* </Link> */}
          <ul className="items-stretch hidden space-x-3 md:flex">
            {
              user?.uid && <li className="flex">
              <NavLink className={({isActive}) => isActive ? active : linkCSS} to='/addservice'>Add Service</NavLink>
              </li>
            }
            <li className="flex">
            <NavLink className={({isActive}) => isActive ? active : linkCSS} to='/blog'>Blog</NavLink>
            </li>
            <li className="flex">
            {
              user?.uid ? <NavLink className={({isActive}) => isActive ? linkCSS : linkCSS}><button onClick={handleLogOut}>Logout</button>
              </NavLink> 
              : <NavLink to='/login' className={({isActive}) => isActive ? active : linkCSS}>Login
              </NavLink> 
            }
            </li>
          </ul>
          <button title="Button" type="button" className="p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        
      </header>
    </div>
  );
};

export default Header;
