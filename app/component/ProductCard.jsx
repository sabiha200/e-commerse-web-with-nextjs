import Image from "next/image";
import React from "react";
import Belt from '../images/belt.png';
import { FaRegHeart } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center relative group overflow-hidden cursor-pointer">
          <Image src={Belt} alt="belt" width={340} height={400}></Image>
          <div className="w-[315px] p-3.5 text-center bg-white hover:bg-amber-700 hover:text-white font-semibold absolute bottom-[15px] transform translate-y-30 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            + Add to Cart
          </div>
          <div className=" flex flex-col gap-6 absolute top-[45px] transform translate-x-60 transition-transform duration-300 ease-in-out group-hover:translate-x-30">
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
  );
};

export default ProductCard;
