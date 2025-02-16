import React from 'react';
import { Button } from 'primereact/button';
import Image from 'next/image';
import Logo from "../../assets/images/logo.svg"
import { FaUser } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

const Navbar: React.FC = () => {
    return (
        <>
            <header className=" bg-white shadow-sm  sticky   z-20 ">
                <nav className=" mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 ">
                        <Image
                            width={200}
                            height={200}
                            src={Logo}
                            alt="Logo"

                        />
                    </div>


                    <div className="flex items-center gap-x-8">
                        <div className="flex items-center ">
                            <Button className="flex items-center space-x-4   ">
                                <FaUser className="h-8 w-8 hover:bg-green-50" />
                                <span className="h-8 w-8 mt-5 font-bold ">LOGIN</span>
                            </Button>
                        </div>
                        <div >
                            <Button className="flex items-center space-x-2 hover:bg-green-50" >
                                <IoBagHandle className="h-10 w-8 " />
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
            </>
        
    );
};

export default Navbar;
