import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import ProductCard from "./ProductCard";

const BestSell = () => {
  return (
    <div className="px-12 py-20">
      <h1 className="text-5xl pb-14">Best Seller</h1>
      <div className="flex gap-12">
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
        <div>
          <ProductCard/>
        </div>
      </div>
    </div>
  );
};

export default BestSell;
