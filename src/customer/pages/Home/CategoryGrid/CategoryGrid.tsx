import React from 'react'

const CategoryGrid = () => {
    return (
        <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
            <div className='col-span-3 row-span-12 text-white '>
                <img
                    className='w-full h-full object-cover object-top rounded-md'
                    src="https://cdn2.yame.vn/pimg/ao-thun-co-be-tay-ngan-soi-nhan-tao-co-gian-tron-dang-vua-gia-tot-no-brand-03-0023742/e5ab6b00-befd-0300-667b-001b994a145f.jpg?w=540&h=756" alt="" />
            </div>
            <div className='col-span-2 row-span-6 text-white '>
                <img
                    className='w-full h-full object-cover object-top rounded-md'
                    src="https://cdn2.yame.vn/pimg/quan-dai-lung-thun-ong-om-vai-thun-co-gian-tron-dang-om-gia-tot-no-brand-07-0023728/85938bf2-60d2-7000-1271-001baabd1229.jpg?w=540&h=756" alt="" />
            </div>
            <div className='col-span-4 row-span-6 text-white '>
                <img
                    className='w-full h-full object-cover object-top rounded-md'
                    src="https://cmsv2.yame.vn/uploads/0f4ed15a-0980-4b45-b34f-744b8c4194ca/BST_Non_Branded_(2).jpg?quality=80&w=1920&h=0" alt="" />
            </div>
            <div className='col-span-3 row-span-12 text-white '>
                <img
                    className='w-full h-full object-cover object-top rounded-md'
                    src="https://cdn2.yame.vn/pimg/ao-so-mi-co-be-tay-dai-tham-hut-soi-nhan-tao-tron-dang-vua-gia-tot-non-branded-19-0024013/9aae01da-17dc-0800-d401-001bee495640.jpg?w=540&h=756" alt="" />
            </div>
            <div className='col-span-4 row-span-6 text-white '>
                <img
                    className='w-full h-full object-cover object-top rounded-md'
                    src="https://th.bing.com/th/id/OIP.m7xxFcocnIyveK11-sgo1QHaD4?rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className='col-span-2 row-span-6 text-white '>
                <img
                    className='w-full h-full object-cover object-top rounded-md'
                    src="https://th.bing.com/th/id/OIP.VaILPSMhF5Lr_xCBsd1apQHaLJ?w=680&h=1024&rs=1&pid=ImgDetMainx" alt="" />
            </div>
        </div>
    )
}

export default CategoryGrid