
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-white shadow-sm'>
            <div className="navbar flex justify-between max-w-[1440px] mx-auto text-black">
            <div className="navbar-start w-full md:w-auto">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li><a className='bg-gradient-to-r from-[#632ee3] to-[#9F62F2] text-white p-3 text-[16px] font-semibold'>+ New Ticket</a></li>
                </ul>
              </div>
              <a href='#' className="text-xl">CS — Ticket System</a>
            </div>
            <div className="navbar-end hidden lg:flex flex-1">
              <ul className="menu menu-horizontal justify-center items-center px-1 space-x-[16px]">
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
                <li><a className='bg-gradient-to-r from-[#632ee3] to-[#9F62F2] text-white p-3 text-[16px] font-semibold'>+ New Ticket</a></li>
              </ul>
            </div>
        </div>
        </div>
  );
};

export default Navbar;
