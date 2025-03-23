import React from 'react'
import ShopByCatoryCard from './ShopByCatoryCard'

const ShopByCategory = () => {
    return (
        <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <ShopByCatoryCard />)}
        </div>
    )
}

export default ShopByCategory