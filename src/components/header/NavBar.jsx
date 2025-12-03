import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const navs = (
    <>
      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/"
          className={({ isActive }) =>
            `transition-all duration-200 hover:text-pink-600 hover:underline ${
              isActive ? "text-pink-600 font-bold underline" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/allblog"
          className={({ isActive }) =>
            `transition-all duration-200 hover:text-pink-600 hover:underline ${
              isActive ? "text-pink-600 font-bold underline" : ""
            }`
          }
        >
          All Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/addblog"
          className={({ isActive }) =>
            `transition-all duration-200 hover:text-pink-600 hover:underline ${
              isActive ? "text-pink-600 font-bold underline" : ""
            }`
          }
        >
          Add Blog
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/featuredblog"
          className={({ isActive }) =>
            `transition-all duration-200 hover:text-pink-600 hover:underline ${
              isActive ? "text-pink-600 font-bold underline" : ""
            }`
          }
        >
          Featured Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          onClick={() => setIsOpen(false)}
          to="/wishlist"
          className={({ isActive }) =>
            `transition-all duration-200 hover:text-pink-600 hover:underline ${
              isActive ? "text-pink-600 font-bold underline" : ""
            }`
          }
        >
          Wish List
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div  onClick={(e) => {
              e.stopPropagation(); // Prevent immediate close
              setIsOpen(!isOpen);
            }} className="dropdown" ref={dropdownRef}>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {isOpen && (
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navs}
              <button className="btn btn-accent text-white w-full mt-2">
                Login
              </button>
            </ul>
          )}
        </div>

        <a className="text-xl font-bold ml-2">BLOG</a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex gap-3">
        <ul className="menu menu-horizontal px-1">{navs}</ul>
        <button className="btn btn-accent text-white">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
