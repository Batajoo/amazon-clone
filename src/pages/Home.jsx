import React from 'react'
import { Carousel, HomeProductsPreviewCard, Navbar } from '../components'

function Home() {
  return (
    <div className='bg-linear-to-b from-gray-700 to-white'>
      <Navbar/>
      <Carousel/>
      <div className='grid grid-cols-3 lg:grid-cols-2 gap-5 mx-2 2xl:grid-cols-4 xl:grid-cols-3'>
        <HomeProductsPreviewCard
          title='Continue shopping deals'
          smallTextBottom="See all deals"
        />
        <HomeProductsPreviewCard
          title='Continue shopping deals'
          smallTextBottom="See all deals"
        />
        <HomeProductsPreviewCard
          title='Continue shopping deals'
          smallTextBottom="See all deals"
        />

        <HomeProductsPreviewCard
          title='Continue shopping deals'
          smallTextBottom="See all deals"
        />
      </div>
    </div>
  )
}

export default Home
