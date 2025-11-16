import Image from "next/image";
import React from "react";
import fashion from "../images/section1.jpg";
import fashion2 from "../images/section2.jpg";
import fashion3 from "../images/section3.jpg";
import Link from "next/link";


const Section3 = () => {
  return (
    <div className="grid grid-cols-2 px-16 py-10 gap-16">
      <div className="row-span-2 relative">
        <Image src={fashion} alt="fashion" />
        <div className="bg-white text-black absolute bottom-50 left-0 px-8 py-6">
          <h1 className="text-4xl pb-4">NEW ARRIVALS</h1>
          <p className="text-xl">Shop Now</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex">
          <Image src={fashion2} alt="fashion" />
          <div className="w-[184px] h-[550px] bg-black "></div>
        </div>
        <div className="w-[#814px] relative">
          <Image src={fashion3} alt="fashion" />
          <div className="bg-white text-black absolute bottom-30 left-0 px-8 py-6">
            <h1 className="text-4xl pb-4">Hand Bag</h1>
            <Link href={'/'} className="text-xl hover:text-amber-500 border-b-2">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
