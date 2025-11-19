'use-client'
import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center p-10'>
            <div className='w-36 hover:cursor-pointer'><Image src={logo} alt='logo'/></div>
            <div className='flex gap-10 text-xl'>
                <div className='flex items-center hover:text-amber-600 hover:cursor-pointer'><Link href={'/'}>Home</Link></div>
                <div className='flex items-center hover:text-amber-600 hover:cursor-pointer'><Link href={'/shop'}> shop </Link></div>
                <div className='flex items-center hover:text-amber-600 hover:cursor-pointer'>Product <RiArrowDropDownLine /></div>
                <div className='flex items-center hover:text-amber-600 hover:cursor-pointer'>Blog <RiArrowDropDownLine /></div>
                <div className='flex items-center hover:text-amber-600 hover:cursor-pointer'>Featured <RiArrowDropDownLine /></div>
            </div>
            <div className='flex gap-3.5 text-3xl'>
                <div className='hover:cursor-pointer'><FiSearch /></div>
                <div className='font-bold hover:cursor-pointer'><MdPersonOutline /></div>
                <div className='hover:cursor-pointer'><FaRegHeart /></div>
                <div className='hover:cursor-pointer'><CgShoppingCart /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar