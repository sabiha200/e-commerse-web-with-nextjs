import React from "react";
import Banner from "../images/addressbanner.jpg";

const JoinNewsletter = () => {
  return (
    <div className="pt-10">
      <div
        style={{ backgroundImage: `url(${Banner.src})` }}
        className="h-dvh bg-center bg-cover flex justify-end items-center"
      >
        <div className="flex flex-col gap-4 px-6">
          <p className="text-lg font-normal">SUBSCRIBE</p>
          <h2 className="text-4xl font-semibold pb-6"> Join our newsletter </h2>
          <div className="pb-4">
            <input
            type="email"
            placeholder="Email"
            className="w-lg py-5 px-4 bg-white border-amber-800"
          />
          </div>
          <div className="w-44 py-3 text-center text-xl font-medium text-white bg-amber-800 hover:bg-amber-950 cursor-pointer hover hover:text-white">
          subscribe
        </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNewsletter;
