import Image from "next/image";
import React from "react";
import look1 from "../images/greencap.png";
import look2 from "../images/scarf.png";
import look3 from "../images/totebag2.png";
import look from "../images/blondhair.png";
import { FaRegHeart } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

const ShopThislook = () => {
  return (
    <div className="grid grid-cols-2 gap-20 py-32 px-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-semibold pb-6">Package and save</p>
        <h1 className="text-4xl font-semibold pb-12">Shop This Look </h1>
        <div className="flex justify-center items-center gap-4 pb-16">
          <div>
            <div className="flex flex-col justify-center items-center relative group overflow-hidden cursor-pointer">
              <Image
                src={look1}
                alt="look1"
                className="w-[600px] h-[300px]"
              ></Image>
              <div className="w-[315px] p-3.5 text-center bg-white hover:bg-amber-700 hover:text-white font-semibold absolute bottom-[15px] transform translate-y-30 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                + Add to Cart
              </div>
              <div className=" flex flex-col gap-2 absolute top-[21px] transform translate-x-40 transition-transform duration-300 ease-in-out group-hover:translate-x-20">
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <FaRegHeart />
                </div>
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <HiArrowPathRoundedSquare />
                </div>
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <IoEyeOutline />
                </div>
              </div>
            </div>
            <h3 className="text-xl pt-4">Solid Brass Leather Belt</h3>
            <p className="text-lg font-semibold">$30.00</p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center relative group overflow-hidden cursor-pointer">
              <Image
                src={look2}
                alt="look2"
                className="w-[600px] h-[300px]"
              ></Image>
              <div className="w-[315px] p-3.5 text-center bg-white hover:bg-amber-700 hover:text-white font-semibold absolute bottom-[15px] transform translate-y-30 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                + Add to Cart
              </div>
              <div className=" flex flex-col gap-2 absolute top-[21px] transform translate-x-40 transition-transform duration-300 ease-in-out group-hover:translate-x-20">
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <FaRegHeart />
                </div>
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <HiArrowPathRoundedSquare />
                </div>
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <IoEyeOutline />
                </div>
              </div>
            </div>
            <h3 className="text-xl pt-4">Solid Brass Leather Belt</h3>
            <p className="text-lg font-semibold">$30.00</p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center relative group overflow-hidden cursor-pointer">
              <Image
                src={look3}
                alt="look3"
                className="w-[600px] h-[300px]"
              ></Image>
              <div className="w-[315px] p-3.5 text-center bg-white hover:bg-amber-700 hover:text-white font-semibold absolute bottom-[15px] transform translate-y-30 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                + Add to Cart
              </div>
              <div className=" flex flex-col gap-2 absolute top-[21px] transform translate-x-40 transition-transform duration-300 ease-in-out group-hover:translate-x-20">
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <FaRegHeart />
                </div>
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <HiArrowPathRoundedSquare />
                </div>
                <div className="text-2xl text-center flex items-center justify-center w-14 h-14 rounded-full shadow-2xs bg-white hover:bg-amber-800 hover:text-white">
                  <IoEyeOutline />
                </div>
              </div>
            </div>
            <h3 className="text-xl pt-4">Solid Brass Leather Belt</h3>
            <p className="text-lg font-semibold">$30.00</p>
          </div>
        </div>
        <div className="w-44 py-3 text-center text-xl font-medium border text-black bg-white hover:bg-amber-800 cursor-pointer hover hover:text-white">
          Shop Now
        </div>
      </div>
      <div>
        <Image src={look} alt="look" />
      </div>
    </div>
  );
};

export default ShopThislook;
