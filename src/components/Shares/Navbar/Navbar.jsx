import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = <>
  <li><Link to="/" className="text-blue-400 font-bold">Home</Link></li>
  <li><Link to="/AllProperties" className="text-blue-400 font-bold">All properties</Link></li>
  <li><Link to="/allBooks" className="text-blue-400 font-bold">Dashboard</Link></li>
  <li><Link to="/allBooks" className="text-blue-400 font-bold">Agent Deshbord</Link></li>

   <li><Link to="/AddProperties" className="text-blue-400 font-bold">Add Properties</Link></li>
   <li><Link to="/login" className="text-blue-400 font-bold">Sign UP</Link></li>
  </>



    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Property Plus</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log In</a>
        </div>

        <div className="dropdown dropdown-end ml-5">
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
<div className="w-10 rounded-full">
    <img
      alt="Tailwind CSS Navbar component"
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<ul
  tabIndex={0}
  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
  <Link to="/myProfile">
  My Profile
  </Link>
  <Link to="/wishlist"> Wishlist</Link>
  <li> Property bought</li>
  <Link to="/AddProperties">Add Properties</Link>
  <li><a>My reviews</a></li>
  <li><a>Logout</a></li>
</ul>
</div>
       
 
      </div>
    );
};

export default Navbar;

