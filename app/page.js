import React from 'react'
import Banner from './component/Banner'
import Service from './component/Service'
import Section3 from './component/Section3'
import ShopbyCategories from './component/ShopbyCategories'
import BestSell from './component/BestSell'

const page = () => {
  return (
    <div>
      <Banner/>
      <Service/>
      <Section3/>
      <ShopbyCategories/>
      <BestSell/>
    </div>
  )
}

export default page