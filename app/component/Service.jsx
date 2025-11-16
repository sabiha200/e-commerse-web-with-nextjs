import React from 'react'
import { TfiWallet } from "react-icons/tfi";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { BsTruck } from 'react-icons/bs';

const Service = () => {
  return (
    <div className='px-14 py-20 grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-12'>
        <div className='flex gap-6'>
            <div className='text-6xl'><BsTruck /></div>
            <div>
                <h1 className='text-2xl font-bold'>FREE SHIPPPING</h1>
                <p className='text-lg font-normal'>Free Shipping for orders over $30</p>
            </div>
        </div>
        <div className='flex gap-6'>
            <div className='text-6xl'><LiaHandHoldingUsdSolid /></div>
            <div>
                <h1 className='text-2xl font-bold'>FREE SHIPPPING</h1>
                <p className='text-lg font-normal'>Free Shipping for orders over $30</p>
            </div>
        </div>
        <div className='flex gap-6'>
            <div className='text-5xl'><TfiWallet /></div>
            <div>
                <h1 className='text-2xl font-bold'>FREE SHIPPPING</h1>
                <p className='text-lg font-normal'>Free Shipping for orders over $30</p>
            </div>
        </div>
    </div>
  )
}

export default Service