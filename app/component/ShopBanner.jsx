import React from 'react'
import image from '../images/addressbanner.jpg'
import ProductCard from './ProductCard'

const ShopBanner = () => {
  return (
    <div>
        <div 
        className='w-auto h-72 bg-center bg-cover'
        style={{backgroundImage:`url(${image.src})`}}
        ></div>
        <div className='grid grid-cols-3 gap-8'>
            <div> price</div>
            <div className='flex gap-12 pt-8 col-span-2'>
            <div>
                <ProductCard/>
            </div>
             <div>
                <ProductCard/>
            </div>
             <div>
                <ProductCard/>
            </div>
             <div>
                <ProductCard/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShopBanner