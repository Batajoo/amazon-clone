import React from 'react'
import { Link } from 'react-router'

function HomeProductsPreviewCard({
  title="",
  itemList=[{
    id: 1,
    img: "https://m.media-amazon.com/images/I/81gMm6JooHL._AC_SY290_.jpg",
    link: "/"
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81gMm6JooHL._AC_SY290_.jpg",
    link: "/"
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81gMm6JooHL._AC_SY290_.jpg",
    link: "/"
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/81gMm6JooHL._AC_SY290_.jpg",
    link: "/"
  }],
  smallLinkBottom="/",
  smallTextBottom
}) {

  return (
    <div className='w-75 p-5 bg-white'>
      <h2 className='font-bold text-2xl mb-5'>{title}</h2>
      <div className='grid grid-cols-2 gap-5 mb-4'>
        {itemList.map((item)=>(
          <Link key={item.id} 
            to={item.link}
          >
            <img src={item.img} 
              alt={item.id}
              className=''
              /></Link>
        ))}
      </div>
      <Link to={smallLinkBottom}
        className='text-sm text-blue-700'
      >{smallTextBottom}</Link>
    </div>
  )
}

export default HomeProductsPreviewCard
