"use client";
import React, { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Cart from "./Cart";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Handsfree", href: "/Handsfree" },
  { name: "Earbuds", href: "/Earbuds" },
  { name: "SmartWatches", href: "/SmartWatches" },
  { name: "PowerBank", href: "/PowerBank" },
  { name: "HeadPhone", href: "/HeadPhones" },

];

export const revalidate = 5; // Revalidate every 5 seconds


export default function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="w-full h-16 px-4 md:px-8 lg:px-16 flex items-center justify-between fixed top-0 left-0 z-50 bg-white shadow-lg">
        {/* Left Section */}
          <Link href={"/"}  >
        <div className="flex gap-2 md:gap-5 items-center">
          <FaHeadphones className="w-8 h-8 md:w-10 md:h-10" />
          <p className="text-base md:text-xl font-semibold italic">
            Mobile Accessories
          </p>
        </div>
          </Link>

          

        {/* Middle Section - Links */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-3 md:gap-5 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-40`}
        >
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  className="text-base md:text-lg font-semibold text-blue-600"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-base md:text-lg font-semibold text-gray-600 transition duration-300 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Icons */}
        <div className="flex gap-3 md:gap-5 items-center">
          <button
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <GrCart
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600 hover:text-blue-600 cursor-pointer"
            onClick={toggleCart}
          />
          <FiSearch className="w-5 h-5 md:w-6 md:h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Cart */}
      {cartVisible && <Cart />}
    </>
  );
}





















{
  /* <div className="hidden md:block">
          <ul className="flex gap-3 md:gap-5 items-center text-sm md:text-xl">
            <Link
              href={"/"}
              className="hover:cursor-pointer border-b-transparent hover:border-b-2 hover:border-blue-600 hover:text-blue-600 duration-300"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer border-b-transparent hover:border-b-2 hover:border-blue-600 hover:text-blue-600 duration-300"
            >
              Products
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer border-b-transparent hover:border-b-2 hover:border-blue-600 hover:text-blue-600 duration-300"
            >
              Blog
            </Link>
            <Link
              href={"/"}
              className="hover:cursor-pointer border-b-transparent hover:border-b-2 hover:border-blue-600 hover:text-blue-600 duration-300"
            >
              Contact
            </Link>
          </ul>
        </div> */
}

{
  /* Mobile Menu - Hidden for larger screens */
}
{
  /* <div className="block md:hidden  ">
        <ul className="flex justify-center gap-3 items-center text-sm ">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Contact</Link>
        </ul>
      </div> */
}
{
  /* Conditionally render the Cart component */
}
