import React, { useState } from 'react';
// import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-500 h-[10vh]">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center  rtl:space-x-reverse">
        {/* <img src={logo} className="h-7" alt="Flowbite Logo"/ > */}
          <span className="self-center text-2xl font-bold text-white whitespace-nowrap  ">
          EVENTPLANNER
          </span>
        </a>
        <button
          onClick={toggleNavbar}
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  transition duration-300 ease-in-out ${isOpen ? 'text-white' : 'text-white'}`}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
      
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto max-sm:absolute max-sm:top-11 max-sm:left-0 max-sm:z-10  ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul
            className="font-medium bg-opacity-95  flex flex-col p-4 md:p-0 mt-4  rounded-lg max-sm:bg-gray-50 max-sm:shadow-lg md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:border-0 max-sm:bg-gradient-to-r from-blue-600 to-indigo-500"
          >
            <li>
              <a
                href="#"
                className="relative text-white after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
                text-lg block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
                aria-current="page"
                onClick={toggleNavbar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-section"
                className="relative text-white after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
                text-lg block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                onClick={toggleNavbar}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service-section"
                className="relative text-white after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
                text-lg block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                onClick={toggleNavbar}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                className="relative text-white after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
                text-lg block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
                onClick={toggleNavbar}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
