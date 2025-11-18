import Image from "next/image";
import React from "react";
import Logo from "../images/logo-white.png";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black h-96 py-20 text-white px-20 grid grid-cols-4 gap-10">
      <div className="flex flex-col gap-5">
        <div className="w-36 text-white pb-3 hover:cursor-pointer">
          <Image src={Logo} alt="logo" />
        </div>
        <div>Email: lumei@gmail.com</div>
        <div>Hours: Mon - Fri // 7am - 4pm (UTC-7)</div>
        <div>Address:1200 Getty Center Drive, Los Angeles, CA 90049, USA</div>
      </div>
      <div className="text-lg flex flex-col gap-2">
        <div className="font-semibold text-xl pb-2">Contact Us</div>
        <div className="hover:text-amber-600 cursor-pointer">About Us</div>
        <div className="hover:text-amber-600 cursor-pointer">Careers</div>
        <div className="hover:text-amber-600 cursor-pointer">
          Delivery Inforamtion
        </div>
        <div className="hover:text-amber-600 cursor-pointer">
          Privacy Policy
        </div>
        <div className="hover:text-amber-600 cursor-pointer">
          Terms & Condition
        </div>
      </div>
      <div className="text-lg flex flex-col gap-2">
        <div className="font-semibold text-xl pb-2">Information</div>
        <div className="hover:text-amber-600 cursor-pointer">My Account</div>
        <div className="hover:text-amber-600 cursor-pointer">Login</div>
        <div className="hover:text-amber-600 cursor-pointer">My Cart</div>
        <div className="hover:text-amber-600 cursor-pointer">Wishlist</div>
        <div className="hover:text-amber-600 cursor-pointer">Checkout</div>
      </div>
      <div className="text-lg flex flex-col gap-2">
        <div className="font-semibold text-xl pb-2">Follow Us</div>
        <div className="hover:text-amber-600 cursor-pointer flex gap-4 text-center pb-3 items-center">
          <FaFacebookF /> Facebook
        </div>
        <div className="hover:text-amber-600 cursor-pointer flex gap-4 text-center pb-3 items-center">
          <BsTwitterX /> Twitter
        </div>
        <div className="hover:text-amber-600 cursor-pointer flex gap-4 text-center pb-3 items-center">
          <FaWhatsapp /> WhatsApp
        </div>
        <div className="hover:text-amber-600 cursor-pointer flex gap-4 text-center pb-3 items-center"> 
            <FaTiktok /> Tiktok
        </div>
      </div>
    </div>
  );
};

export default Footer;
