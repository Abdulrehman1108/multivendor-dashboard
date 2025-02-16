import React from 'react';
import { Button } from 'primereact/button';
import Image from 'next/image';
import Logo from "../../assets/images/logo.svg";
import { FaUser } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

const Navbar: React.FC = () => {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* Wrap the logo in a responsive container */}
            <div className="w-32 sm:w-48">
              <Image
                src={Logo}
                alt="Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-x-4">
            <Button className="flex items-center space-x-2 hover:bg-green-50 p-2">
              <FaUser className="h-6 w-6" />
              {/* Hide text on smaller screens */}
              <span className="hidden sm:inline font-bold">LOGIN</span>
            </Button>
            <Button className="flex items-center hover:bg-green-50 p-2">
              <IoBagHandle className="h-8 w-8" />
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
