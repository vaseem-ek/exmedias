import React, { useState } from "react";
import { FaBars} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 w-full px-3 md:px-10 lg:px-20 bg-white justify-around">
            <div className="container mx-auto flex justify-between items-center md:py-3 py-2 md:px-6">
                <div>
                    <img src="https://exmedia.in/images/LOGO%20Svg.svg" className="w-10 md:w-20" alt="Logo" />
                </div>

              
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#home" className="hover:text-orange-400 hover:underline">HOME</a>
                    <a href="#" className="hover:text-orange-400 hover:underline">SERVICE</a>
                    <a href="#" className="hover:text-orange-400 hover:underline">DELIVERABLES</a>
                    <a href="#" className="hover:text-orange-400 hover:underline">ABOUT</a>
                    <a href="#" className="hover:text-orange-400 hover:underline">CONTACT</a>

                   
                </div>
                <div>

                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? (
                            <RxCross2 size={35} className="text-gray-500 cursor-pointer" />
                        ) : (
                            <FaBars size={25} className="text-gray-500 cursor-pointer" />
                        )}
                    </button>
                </div>
                
                
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white border-t shadow-md p-4">
                    <a href="#" className="block py-2 hover:text-sky-500">HOME</a>
                    <a href="#" className="block py-2 hover:text-sky-500">SERVICE</a>
                    <a href="#" className="block py-2 hover:text-sky-500">DELIVERABLE</a>
                    <a href="#" className="block py-2 hover:text-sky-500">ABOUT</a>
                    <a href="#" className="block py-2 hover:text-sky-500">CONTACT</a>

                  
                </div>
            )}
        </nav>
    );
};

export default Navbar;
