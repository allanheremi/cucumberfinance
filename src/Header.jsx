import React from 'react';
import cucumberlogo from '/public/cucumberlogo.png';
import { Link, BrowserRouter } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="flex bg-ec1">
        <ul className="flex items-center justify-start w-full gap-8">
          <Link to={'/'}>
            <img src={cucumberlogo} alt="logo" className="w-[4rem] " />
          </Link>

          <Link to={'/'}>
            <li>
              <button className="bg-ec3 rounded-sm p-4 py-2 text-ec5 text-m  ">
                About
              </button>
            </li>
          </Link>

          <li>
            <button className="bg-ec3 rounded-sm p-4 py-2  text-ec5 text-m  ">
              <a
                href="https://github.com/allanheremi/cucumberfinance"
                target="_blank"
              >
                Source code
              </a>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
