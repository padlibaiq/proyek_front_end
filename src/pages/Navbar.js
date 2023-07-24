import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="w-full h-16 flex items-center px-14 justify-between" style={{ backgroundColor: '#4169E1' }}>
  <Link to={"/home"} className="text-3xl font-semibold font-Montesarrat" style={{ color: '#B0E0E6' }}>
    SIFAST
  </Link>  
        <div className="flex">
        <Link to={"/login"} className="hover:bg-blue-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" style={{ backgroundColor: '#B0E0E6', color: '#4169E1' }}>Logout</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;



