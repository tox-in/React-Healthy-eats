import React, { useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillHouseFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';

const Navbar = ({searchInput, handleSearch}) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isCartRoute = location.pathname === '/cart';

  return (
    <div className="max-w-[1640] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-4  max-w-[150px] pl-[50px] justify-center md:max-w-[300px] sm:w-[100px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search your beloved"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      {/* Cart/Home Button */}
      
      <Link to={isCartRoute ? '/' : '/cart'} className="bg-black max-w-[150px] px-4 md:px-3 sm:px-2 text-white md:flex items-center py-2 rounded-full">
        {isCartRoute ? <BsFillHouseFill size={20} className="mr-2" /> : <BsFillCartFill size={20} className="mr-2" />}
        {isCartRoute ? 'Home' : 'Cart'}
      </Link>

      {/* Mobile */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" />
      ) : (
        ""
      )}

      {/* Side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex"><TbTruckDelivery size={25} className="mr-4" />Orders</li>
            <li className="text-xl py-4 flex"><MdFavorite size={25} className="mr-4" />Favorites</li>
            <li className="text-xl py-4 flex"><FaWallet size={25} className="mr-4" />Wallet</li>
            <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" />Help</li>
            <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" />Promotion</li>
            <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" />Best Ones</li>
            <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" />Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
