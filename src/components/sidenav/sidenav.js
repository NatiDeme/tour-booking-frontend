import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './sidenav.css';

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const close = () => {
    setNavbarOpen(false);
  };

  const navItems = [
    { link: '/', label: 'Tour' },
    { link: '/my-reservations', label: 'My Reservation ' },
    { link: '/reserve', label: 'reserve tour' },
    { link: '/create-tour', label: 'Create tour' },
    { link: '/delete-tour', label: 'Delete tour' }
  ];
  return (
    <>
      <button type="button" onClick={handleToggle} className="navbutton">
        {navbarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <ul
        className={`menuNav ${
          navbarOpen ? ' showMenu' : ''
        } md:flex flex-col gap-3 pt-16 text-xl font-bold tracking-wide p-10`}>
        {navItems.map((element) => (
          <NavLink key={element.link} to={element.link} className="" onClick={close}>
            <li className="flex items-center pl-3 text-lg py-4 h-12 text-gray-700 rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out uppercase">
              {element.label}
            </li>
          </NavLink>
        ))}
        <NavLink to="/login" onClick={close}>
          <li>
            <div className="flex justify-center mt-5">
              <button
                type="button"
                className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-500 px-10">
                Sign In
              </button>
            </div>
          </li>
        </NavLink>
      </ul>
    </>
  );
}

export default Nav;
