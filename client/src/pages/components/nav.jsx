import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsCart, BsShop } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useCart } from '../../cartContext';
import AuthMiddleware from "../authMiddleware";
function Navbar() {
  const { cartItems } = useCart();
  const { user, loading } = AuthMiddleware();
  const [isOpen, setIsOpen] = useState(false);
  var len = cartItems.length;
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/cart" className="justify-center gap-1 flex items-center">
          <BsCart className='text-xl text-hd' />
          <span className="text-center text-sm text-subhd">{len}</span>
        </Link>
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu />
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
           <li>
           <a href='/' className='flex items-center gap-2  text-hd'><BsShop className='text-hd'/>home</a>
           </li>
          <li>
              <a href="/#featured" class="block py-2 pl-3 pr-4 font-medium  text-hd rounded   md:border-0  md:p-0">Featured</a>
            </li>
            <li>
              <a href="/#collections" class="block py-2 pl-3 pr-4 font-medium  text-hd rounded   md:border-0  md:p-0">Collections</a>
            </li>
            <li>
              <a href="/#about" class="block py-2 pl-3 pr-4 font-medium  text-hd rounded   md:border-0  md:p-0">About</a>
            </li>
            {user ? (
              <li>
                <Link to="/dashboard">
                  <a href="#" class="block py-2 pl-3 pr-4 text-hd rounded   md:border-0  md:p-0">Dashboard</a>
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <a href="#" class="block py-2 pl-3 pr-4 text-hd rounded   md:border-0  md:p-0">login</a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
