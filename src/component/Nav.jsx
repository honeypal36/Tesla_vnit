import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import custom CSS for navbar

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar py-7 px-10 text-white flex items-center justify-between bg-black'>
      <h1 className='text-2xl'>Tesla</h1> {/* Removed Tesla icon */}

      {/* Hamburger Menu Icon */}
      <button
        className='block md:hidden focus:outline-none'
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:gap-10 absolute md:static w-full md:w-auto left-0 top-20 md:top-0 p-4 md:p-0 bg-black md:bg-transparent`}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/'>Home</Link>
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/Projects'>Projects</Link>
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/Council'>Council</Link>
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/Achieve'>Achievements</Link>
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/Gallery'>Gallery</Link>
        <Link className='nav-link block md:inline py-2 md:py-0 font-mono' to='/Learn'>Learn</Link>
      </div>
    </nav>
  );
}

export default Nav;