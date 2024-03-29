import React, { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const Header = ({ darkMode, setDarkMode }) => {
  const { user, logOut } = useContext(AuthContext);
  //User Log Out
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User Logged Out"))
      .catch((error) => console.error(error.message));
  };

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      setDarkMode(true);
      localStorage.setItem("darkMode", true);
    } else {
      setDarkMode(false);
      localStorage.setItem("darkMode", false);
    }
  };

  const linkCSS =
    "flex items-center mx-3 px-4 -mb-1 border-b-2 dark:border-transparent font-semibold font-mono dark:bg-gray-900 dark:text-white";
  const active =
    "flex items-center mx-3 px-4 -mb-1 rounded-box border-b-2 dark:border-transparent font-semibold dark:text-violet-400";
  return (
    <div className="navbar rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-gray-900 bg-white dark:bg-base-900 dark:text-white"
          >
            <li className="flex">
              <NavLink
                className={({ isActive }) => (isActive ? active : linkCSS)}
                to="/packages"
              >
                Packages
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                className={({ isActive }) => (isActive ? active : linkCSS)}
                to="/gallary"
              >
                Gallary
              </NavLink>
            </li>
            {user?.uid && (
              <li className="flex">
                <NavLink
                  className={({ isActive }) => (isActive ? active : linkCSS)}
                  to="/myreviews"
                >
                  My Reviews
                </NavLink>
              </li>
            )}
            {user?.uid && (
              <li className="flex">
                <NavLink
                  className={({ isActive }) => (isActive ? active : linkCSS)}
                  to="/addservice"
                >
                  Add Service
                </NavLink>
              </li>
            )}
            <li className="flex">
              <NavLink
                className={({ isActive }) => (isActive ? active : linkCSS)}
                to="/blog"
              >
                Blogs
              </NavLink>
            </li>
            <li className="flex">
              {user?.uid ? (
                <NavLink
                  className={({ isActive }) => (isActive ? linkCSS : linkCSS)}
                >
                  <button onClick={handleLogOut}>Logout</button>
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? active : linkCSS)}
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text text-3xl font-extrabold text-transparent"
        >
          Pixel Cloud
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="flex">
            <NavLink
              className={({ isActive }) => (isActive ? active : linkCSS)}
              to="/packages"
            >
              Packages
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className={({ isActive }) => (isActive ? active : linkCSS)}
              to="/gallary"
            >
              Gallary
            </NavLink>
          </li>
          {user?.uid && (
            <li className="flex">
              <NavLink
                className={({ isActive }) => (isActive ? active : linkCSS)}
                to="/myreviews"
              >
                My Reviews
              </NavLink>
            </li>
          )}
          {user?.uid && (
            <li className="flex">
              <NavLink
                className={({ isActive }) => (isActive ? active : linkCSS)}
                to="/addservice"
              >
                Add Service
              </NavLink>
            </li>
          )}
          <li className="flex">
            <NavLink
              className={({ isActive }) => (isActive ? active : linkCSS)}
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>
          <li className="flex">
            {user?.uid ? (
              <NavLink
                className={({ isActive }) => (isActive ? linkCSS : linkCSS)}
              >
                <button onClick={handleLogOut}>Logout</button>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? active : linkCSS)}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
          <label className="swap swap-rotate">
          <input onClick={handleDarkMode} type="checkbox" />

       
           {/* {
            darkMode ?  <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            :
            <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
           } */}
  
          {
            darkMode ? <div className="text-2xl"><BsFillMoonStarsFill/></div> : <div className="text-4xl"><BiSun/></div>
          }

        </label>
      </div>
    </div>
  );
};

export default Header;
