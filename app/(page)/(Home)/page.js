import React from 'react'
import Banner from '@/app/component/Banner'
import Service from '@/app/component/Service'
import Section3 from '@/app/component/Section3'
import ShopbyCategories from '@/app/component/ShopbyCategories'
import BestSell from '@/app/component/BestSell'
import HighandLow from '@/app/component/HighandLow'
import ShopThislook from '@/app/component/ShopThislook'
import BrandList from '@/app/component/BrandList'
import JoinNewsletter from '@/app/component/JoinNewsletter'

const page = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Section3/>
      <ShopbyCategories/>
      <BestSell/>
      <HighandLow/>
      <ShopThislook/>
      <BrandList/>
      <JoinNewsletter/>
    </div>
  )
}

export default page