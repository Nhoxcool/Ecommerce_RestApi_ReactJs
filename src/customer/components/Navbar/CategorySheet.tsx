import React from 'react'
import { menLevelTwo } from '../../../data/category/level two/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/level two/womenLevelTwo'
import { accessoriesLevelTwo } from '../../../data/category/level two/accessoriesLevelTwo'
import { shoesLevelTwo } from '../../../data/category/level two/shoesLevelTwo'
import { menLevelThree } from '../../../data/category/level three/menLevelThree'
import { womenLevelThree } from '../../../data/category/level three/womenLevelThree'
import { accessoriesLevelThree } from '../../../data/category/level three/accessoriesLevelThree'
import { shoesLevelThree } from '../../../data/category/level three/shoesLevelThree'
import { Box, dividerClasses } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import { useNavigate } from 'react-router-dom'

const categoryTwo: { [key: string]: any[] } = {
    men: menLevelTwo,
    women: womenLevelTwo,
    accessories: accessoriesLevelTwo,
    shoes: shoesLevelTwo
}
const categoryThree: { [key: string]: any[] } = {
    men: menLevelThree,
    women: womenLevelThree,
    accessories: accessoriesLevelThree,
    shoes: shoesLevelThree
}

const CategorySheet = ({ selectedCategory, setShowSheet }: any) => {
    const navigate = useNavigate();

    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => child.parentCategoryId == parentCategoryId)
    }
    return (
        <Box
            sx={{ zIndex: 2 }}
            className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
            <div className='flex text-sm flex-wrap'>
                {
                    categoryTwo[selectedCategory]?.map((item, index) => <div className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}>
                        <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                        <ul className='space-y-3'>
                            {childCategory(categoryThree[selectedCategory], item.categoryId).map((item: any) => <div>
                                <li onClick={() => navigate("/products/" + item.categoryId)} className='hover:text-primary-color cursor-pointer'>
                                    {item.name}
                                </li>
                            </div>)}
                        </ul>
                    </div>)
                }
            </div>
        </Box>
    )
}

export default CategorySheet