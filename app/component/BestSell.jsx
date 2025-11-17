import Image from 'next/image'
import React from 'react'
import Belt from '../images/belt.png'

const BestSell = () => {
  return (
    <div className='px-12 pb-20'>
        <h1 className="text-5xl pb-14">Best Seller</h1>
        <div className='flex gap-12'>
            <div className=''>
                <Image src={Belt} alt='belt' width={340} height={400}></Image>
                <h3 className='text-xl pt-4'>Solid Brass Leather Belt</h3>
                <p className='text-lg font-semibold'>$30.00</p>
                <div className='w-[300px] p-3.5 text-center bg-amber-700 font-semibold'> + Add to Cart</div>
            </div>
            <div className=''>
                <Image src={Belt} alt='belt' width={340} height={400}></Image>
            </div>
            <div className=''>
                <Image src={Belt} alt='belt' width={340} height={400}></Image>
            </div>
            <div className=''>
                <Image src={Belt} alt='belt' width={340} height={400}></Image>
            </div>
        </div>
    </div>
  )
}

export default BestSell