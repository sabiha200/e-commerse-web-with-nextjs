import Image from 'next/image'
import React from 'react'
import brand1 from '../images/brand-1.png'
import brand2 from '../images/brand-4.png'
import brand3 from '../images/brand-6.png'

const BrandList = () => {
  return (
    <div className='flex px-20 pb-24 gap-28'>
        <div>
            <Image src={brand1} alt='brand' className='w-36'/>
        </div>
        <div>
            <Image src={brand2} alt='brand'className='w-36'/>
        </div>
        <div>
            <Image src={brand3} alt='brand'className='w-36'/>
        </div>
        <div>
            <Image src={brand1} alt='brand' className='w-36'/>
        </div>
        <div>
            <Image src={brand2} alt='brand' className='w-36'/>
        </div>
        <div>
            <Image src={brand3} alt='brand' className='w-36'/>
        </div>
    </div>
  )
}

export default BrandList