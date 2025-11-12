import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-10'>
            <div className='w-36'><Image src={logo} alt='logo'/></div>
            <div className='flex gap-10 text-xl'>
                <div className='flex items-center'>Home <RiArrowDropDownLine /></div>
                <div className='flex items-center'>shop <RiArrowDropDownLine /></div>
                <div className='flex items-center'>Product <RiArrowDropDownLine /></div>
                <div className='flex items-center'>Blog <RiArrowDropDownLine /></div>
                <div className='flex items-center'>Featured <RiArrowDropDownLine /></div>
            </div>
            <div className='flex gap-3.5 text-3xl'>
                <div><FiSearch /></div>
                <div className='font-bold'><MdPersonOutline /></div>
                <div><FaRegHeart /></div>
                <div><CgShoppingCart /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar