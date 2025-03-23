import React from 'react'

const SimilarProductCard = () => {
    return (
        <div>
            <div className='group px-4 relative'>
                <div className='card'
                >
                    <img
                        className='card-media object-top'
                        src="https://th.bing.com/th/id/OIP.YzEBpZWxFmCaYHOhuChtgAHaHa?rs=1&pid=ImgDetMain" alt=""
                    />
                </div>
                <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
                    <div className='name'>
                        <h1>Nike</h1>
                        <p>Blue Shirt</p>
                    </div>
                    <div className='price flex items-center gap-3'>
                        <span className='font-sans text-gray-800'>
                            $ 40
                        </span>
                        <span className='line-through text-gray-400'>
                            $ 90
                        </span>
                        <span className='text-primary-color font-semibold'>
                            60%
                        </span>
                    </div>
                </div>

            </div></div>
    )
}

export default SimilarProductCard