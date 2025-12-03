import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About MindWave</h3>
          <p className="text-gray-500">
            MindWave is your go-to source for tech, lifestyle, design, and
            travel blogs. We share insightful articles to educate and inspire
            our readers.
          </p>
        </div>

        <div className="flex justify-between">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to={"/"} className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/allblog"} className="hover:text-primary">
                  Blogs
                </Link>
              </li>
              <li>
                <a href="" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="" className="hover:text-primary">
                  Technology
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary">
                  Design
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary">
                  Travel
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary">
                  Food
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary w-full">Subscribe</button>
          </form>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} MindWave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
