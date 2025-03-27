import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay, Scrollbar} from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {product1Img, product2Img, product3Img} from "../assets/index"

function Carousel() {
    const products = [
        {
            id: 1,
            title: "Iphone 12 pro max ultra",
            bannerImage: product1Img,
            link: "/"
        },
        {
            id: 2,
            title: "Supra Mk5",
            bannerImage: product2Img,
            link: "/"
        },
        {
            id: 3,
            title: "Vaccum Cleaner",
            bannerImage: product3Img,
            link: "/"
        }
    ]
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={500}
                slidesPerView={1}
                navigation={true}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper)=> console.log(swiper)}
                autoplay={{
                    delay:5000,
                    disableOnInteraction: false,
                }}
            >
                {products.map((product)=>(
                    <SwiperSlide key={product.id}>
                        <div className='cursor-pointer flex justify-center items-center bg-white shadow-lg'
                            onClick={()=>window.open(product.link, "_blank")}
                        >
                            <img 
                                src={product.bannerImage}
                                alt={product.title}
                                className='w-full h-60 object-cover'
                            />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
