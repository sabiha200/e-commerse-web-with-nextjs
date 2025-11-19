import Image from "next/image";
import React from "react";
import BannerImage from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-center bg-cover flex items-center justify-end "
         style={{backgroundImage: `url(${BannerImage.src})`}}>
      <div className="flex flex-col gap-4">
        <h1 className="text-7xl w-xl pb-8 animate-slide-left">Fashion for the petite frame</h1>
      <p className="animate-slide-left2 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Banner;
