
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <>
    <footer className="bg-[#000000] text-[#b2b2b2]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top row of 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-[#6BD70F] font-semibold mb-3">Get to Know</h2>
            <ul className="space-y-2">
              <li>Terms & Conditions</li>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-[#6BD70F] font-semibold mb-3">Let Us Help You</h2>
            <ul className="space-y-2">
              <li>Vendors</li>
              <li>Drivers</li>
            </ul>
          </div>

          {/* Column 3 (Social Icons) */}
          <div>
            <h2 className="text-[#6BD70F] font-semibold mb-3">Let Us Help You</h2>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-[#6BD70F]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#6BD70F]">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#6BD70F]">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#6BD70F]">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 4 (Partner with us) */}
          <div>
            <h2 className="text-[#6BD70F] font-semibold mb-3">Partner with us</h2>
            <button className="block w-full mb-2 border border-[#6BD70F] text-[#6BD70F] px-4 py-2 hover:bg-[#6BD70F] hover:text-black transition-colors">
              BECOME A VENDOR
            </button>
            <button className="block w-full border border-[#6BD70F] text-[#6BD70F] px-4 py-2 hover:bg-[#6BD70F] hover:text-black transition-colors">
              BECOME A RESTAURANT
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-8">
          {/* Left: Copyright */}
          <div className="text-sm">
            Eatragon © 2016 All rights reserved
          </div>

          {/* Middle: Powered by ninjascode */}
          <div className="text-sm text-center">
            Powered by <span className="text-[#6BD70F]">ninjascode</span>
          </div>

          {/* Right: Subscribe */}
          <div className="flex justify-end items-center space-x-3">
            <h2 className="text-[#6BD70F] font-semibold">Subscribe</h2>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent border border-[#6BD70F] px-3 py-2 text-sm placeholder-[#b2b2b2] focus:outline-none"
            />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default FooterSection;
