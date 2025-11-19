import Image from "next/image";
import React from "react";
import dress1 from "../images/highandlow.jpg";
import dress2 from "../images/highandlow2.png";
import Link from "next/link";

const HighandLow = () => {
  return (
    <div className=" px-8 py-14 flex gap-32 justify-center items-center border-b-2 border-b-neutral-300">
      <div className="pb-10">
        <p className="text-lg font-semibold pb-6">BOLD AND BEAUTIFUL</p>
        <h1 className="text-5xl font-bold pb-20">Mixing High and Low </h1>
        <div className="overflow-hidden cursor-pointer">
          <Image
            src={dress2}
            alt="dress"
            className="w-xl h- transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center pb-10">
        <div className="relative">
          <Image src={dress1} alt="dress" className="w-3xl h-[850px]" />
          <Link href={"https://www.youtube.com/watch?v=QUx1anKHYuI"}>
            <div className="h-44 w-44 rounded-full bg-black hover:bg-amber-800 absolute text-center flex items-center justify-center text-white top-80 left-72">
              PLAY
            </div>
          </Link>
        </div>
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
