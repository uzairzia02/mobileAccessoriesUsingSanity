'use client'
import React from "react";
import ChargerImage from "../../../public/bannerImages/charger.jpg";
import Image from "next/image";


// type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

export default function Cart()
  {return (
    <>

<div className="w-full lg:w-[500px] h-auto lg:h-[800px] bg-gray-300 p-3 sm:p-5 flex-col space-y-3 fixed top-0 right-0 z-50 mt-16 opacity-95 overflow-y-auto">
  {/* Header Section */}
  <p className="text-xl sm:text-2xl font-bold">Shopping Cart</p>
  <p className="text-gray-500">3 items</p>

  {/* Cart Items Section */}
  <div className="w-full lg:w-[450px] flex-col space-y-5 rounded-lg pl-2 sm:pl-3 items-center h-auto bg-gray-400 overflow-y-auto py-3 sm:py-5">
    <div className="flex space-x-3 sm:space-x-5">
      <Image
        src={ChargerImage}
        alt="Charger Image"
        className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg"
      ></Image>
      <div className="space-y-2 sm:space-y-3 text-base sm:text-xl">
        <p>R-705 Charger</p>
        <p>Rs. 1,099</p>
        <div className="flex">
          <p className="p-2 sm:p-4 border-2 border-gray-400 bg-gray-200 text-lg sm:text-2xl rounded-l-md">
            -
          </p>
          <p className="px-4 py-2 sm:px-8 sm:py-4 border-2 border-gray-400 bg-gray-200 text-lg sm:text-2xl">
            1
          </p>
          <p className="p-2 sm:p-4 border-2 border-gray-400 bg-gray-200 text-lg sm:text-2xl rounded-r-md">
            +
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Subtotal Section */}
  <div className="flex justify-between px-3 sm:px-5">
    <p className="text-lg sm:text-xl font-semibold">Subtotal</p>
    <p className="text-2xl sm:text-3xl font-bold">Rs. 15,000</p>
  </div>

  {/* Checkout Button */}
  <div className="flex items-center justify-center">
    <button className="px-8 sm:px-16 py-3 sm:py-4 border-2 mt-5 sm:mt-10 font-semibold sm:font-bold text-lg sm:text-2xl rounded-lg bg-black text-white hover:scale-110 duration-300">
      Check Out
    </button>
  </div>
</div>

    
  </>
  );
}
