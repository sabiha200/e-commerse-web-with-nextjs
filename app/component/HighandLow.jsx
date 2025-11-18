import Image from "next/image";
import React from "react";
import dress1 from "../images/highandlow.jpg";
import dress2 from "../images/highandlow2.png";

const HighandLow = () => {
  return (
    <div className=" px-8 py-10 flex gap-32 justify-center items-center border-b-2 border-b-neutral-300">
      <div className="pt-16 overflow-hidden cursor-pointer">
        <p className="text-lg font-semibold pb-6">BOLD AND BEAUTIFUL</p>
        <h1 className="text-5xl font-bold pb-12">Mixing High and Low </h1>
        <Image src={dress2} alt="dress" className="w-xl transition-transform duration-300 ease-in-out hover:scale-110" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        <Image src={dress1} alt="dress" className="w-3xl h-[850px]" />
        <p className="text-xl w-2xl pt-20 text-center font-normal">
          Discover the latest trends and timeless pieces at Lumei, where we
          curate collections that let you express yourself effortlessly. Whether
          you’re dressing up for a special occasion or adding essentials to your
          daily wardrobe, find your signature look here.
        </p>
      </div>
    </div>
  );
};

export default HighandLow;
