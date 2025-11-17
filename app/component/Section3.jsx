import Image from "next/image";
import React from "react";
import fashion from "../images/section1.jpg";
import fashion2 from "../images/section2.jpg";
import fashion3 from "../images/section3.jpg";
import Link from "next/link";

const Section3 = () => {
  return (
    <div className="grid grid-cols-2 px-16 py-10 gap-16">
      <div className="row-span-2 relative overflow-hidden group cursor-pointer">
        <Image src={fashion} alt="fashion" className="transition-transform ease-in-out duration-200 hover:scale-110" />
        <div className="bg-white text-black absolute bottom-50 left-0 px-8 py-6 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
          <h1 className="text-4xl pb-4">NEW ARRIVALS</h1>
          <Link
              href={"/"}
              className="text-xl hover:text-amber-800 border-b-2"
            >
              Shop Now
            </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex overflow-hidden cursor-pointer">
          <Image src={fashion2} alt="fashion" className="transition-transform duration-200 ease-in-out hover:scale-110" />
          <div className="w-[184px] h-[550px] bg-black "></div>
        </div>
        <div className="w-[#814px] relative overflow-hidden group cursor-pointer">
          <Image src={fashion3} alt="fashion" className=" transition-transform duration-200 ease-in-out hover:scale-110" />
          <div className="bg-white text-black absolute bottom-30 px-8 py-6 transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
            <h1 className="text-4xl pb-4">Hand Bag</h1>
            <Link
              href={"/"}
              className="text-xl hover:text-amber-800 border-b-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
