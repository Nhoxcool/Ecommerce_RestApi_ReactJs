import React from 'react'
import "./ShopByCategory.css"

const ShopByCatoryCard = () => {
    return (
        <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
            <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color'>
                <img className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top h-full w-full' src="https://cdn2.yame.vn/pimg/pktt-non-bucket-vai-kaki-phu-kien-no-style-m159-vol-24-0024307/d4023b26-213c-1800-ca0c-001bfa22ef85.jpg?w=540&h=756" alt="" />
            </div>
            <h1>Hat</h1>
        </div>
    )
}

export default ShopByCatoryCard