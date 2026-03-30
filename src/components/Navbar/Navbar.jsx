import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({ carts }) => {
  const links = (
    <>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
      <li>
        <a>Testimonials</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
    </>
  );
  return (
    <>
      <div className="shadow-lg">
        <div className="navbar bg-base-100  max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              DigiTools
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black">{links}</ul>
          </div>
          <div className="navbar-end gap-5 items-center ">
            <div className="relative">
              <MdOutlineShoppingCart size={20} />
              {carts.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {carts.length}
                </span>
              )}
            </div>
            <p>Login</p>
            <a className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] ">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
