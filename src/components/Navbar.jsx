import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navLink } from "../data/dummy";
import { Link } from "react-scroll";
import { IoIosMenu, IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
    const [nav, setNav] = useState(false)
    return (
        // dibawah ini tambahin class fix top-0
        <div className="flex justify-between items-center px-8 py-12 w-full h-20 bg-primary fixed top-0 md:bg-white lg:px-[72px] z-50">
            <div className="relative w-40 h-20">
                <img className="absolute w-full h-full object-contain -left-10" src={logo} alt="Logo" />
            </div>
            <ul className="hidden md:flex">
                <li className="flex md:gap-10 lg:gap-8 cursor-default">
                    {navLink.map((item) => {
                        return (
                            <Link to={item.id} key={item.id} className="hover:text-secondary font-medium"> {item.name} </Link>
                        );
                    })}
                </li>
            </ul>
            <div className="hidden items-center md:hidden lg:block">
                <button className="px-6 lg:px-8 py-2 text-base font-bold hover:text-secondary">
                    Login
                </button>
                <button className="px-6 lg:px-8 py-2 text-base text-secondary font-bold outline outline-1 outline-secondary hover:text-white hover:bg-secondary rounded-lg">
                    Sign Up
                </button>
            </div>

            {/* Hamburger Menu */}
            <IoIosMenu className="text-4xl block text-white md:hidden cursor-pointer" onClick={() => setNav((prev => !prev))} />
            <div className={` ${nav ? "right-0" : "-right-full"} flex flex-col gap-4 pt-10 px-8 md:hidden absolute top-0 w-80 h-screen bg-blue-green rounded-l-lg `}>
                <div className="flex justify-between items-center">
                    <p className="font-semibold">Menu</p>
                    {/* Close Icon Menu */}
                    <IoIosCloseCircleOutline className="text-2xl cursor-pointer" onClick={() => setNav((prev => !prev))} />
                    {/* End Close Icon Menu */}
                </div>
                <ul className="text-sm">
                    <li className="flex gap-y-4 flex-col">
                        {navLink.map((item) => {
                            return (
                                <Link to={item.id} key={item.id} className="p-2 border border-primary rounded-lg hover:bg-primary hover:text-secondary hover:border-primary cursor-pointer"> {item.name} </Link>
                            );
                        })}
                    </li>
                </ul>
            </div>
        </div>
    );
}