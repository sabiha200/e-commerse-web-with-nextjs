import Image from "next/image";
import React from "react";
import Lady from "../images/categories1.png";
import Bag from "../images/categories2.png";
import shoe from "../images/categories3.png";
import glasses from "../images/categories4.png";
import cloths from "../images/categories5.png";
import cap from "../images/categories6.png";
import Link from "next/link";

const ShopbyCategories = () => {
  return (
    <div className="flex flex-col items-center justify-center px-14 pb-20">
      <h1 className="text-5xl pb-14">Shop by Categories</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <Link href={'/'}>
        <div className="flex flex-col justify-center items-center gap-6">
          <div
            className="w-64 h-64 rounded-full border-2 border-gray-300 bg-cover bg-center hover:border-amber-800 cursor-pointer"
            style={{ backgroundImage: `url(${Lady.src})` }}
          ></div>
          <div>
            <h3 className="text-2xl hover:text-amber-800"> Accessory</h3>
          </div>
        </div>
        </Link>
        <Link href={'/'}>
          <div className="flex flex-col justify-center items-center gap-6">
            <div
              className="w-64 h-64 rounded-full border-2 border-gray-300 bg-cover bg-center hover:border-amber-800 cursor-pointer"
              style={{ backgroundImage: `url(${Bag.src})` }}
            ></div>
            <div>
              <h3 className="text-2xl hover:text-amber-800"> Bages </h3>
            </div>
          </div>
        </Link>
        <Link href={'/'}>
        <div className="flex flex-col justify-center items-center gap-6">
          <div
            className="w-64 h-64 rounded-full border-2 border-gray-300 bg-cover bg-center hover:border-amber-800 cursor-pointer"
            style={{ backgroundImage: `url(${shoe.src})` }}
          ></div>
          <div>
            <h3 className="text-2xl hover:text-amber-800"> Shoes</h3>
          </div>
        </div>
        </Link>
        <Link href={'/'}>
        <div className="flex flex-col justify-center items-center gap-6">
          <div
            className="w-64 h-64 rounded-full border-2 border-gray-300 bg-cover bg-center hover:border-amber-800 cursor-pointer"
            style={{ backgroundImage: `url(${glasses.src})` }}
          ></div>
          <div>
            <h3 className="text-2xl hover:text-amber-800"> Glasses</h3>
          </div>
        </div>
        </Link>
        <Link href={'/'}>
        <div className="flex flex-col justify-center items-center gap-6">
          <div
            className="w-64 h-64 rounded-full border-2 border-gray-300 bg-cover bg-center hover:border-amber-800 cursor-pointer"
            style={{ backgroundImage: `url(${cloths.src})` }}
          ></div>
          <div>
            <h3 className="text-2xl hover:text-amber-800"> clothes </h3>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopbyCategories;
