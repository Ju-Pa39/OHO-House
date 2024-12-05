import React from 'react'
import logo from '../assets/img/logo.png'


export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <a href="#home">
            <img
              src={logo}
              className="h-20 w-auto"
            />
          </a>
        </div>

        {/* Menu Bar */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">
              หน้าแรก
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition">
              บริการของเรา
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition">
              ผลงานของเรา
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              ติดต่อเรา
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
