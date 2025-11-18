import React from 'react'
import Banner from './component/Banner'
import Service from './component/Service'
import Section3 from './component/Section3'
import ShopbyCategories from './component/ShopbyCategories'
import BestSell from './component/BestSell'
import HighandLow from './component/HighandLow'
import ShopThislook from './component/ShopThislook'
import BrandList from './component/BrandList'
import JoinNewsletter from './component/JoinNewsletter'

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