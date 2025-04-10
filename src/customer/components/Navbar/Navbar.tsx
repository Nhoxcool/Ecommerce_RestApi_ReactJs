import { Avatar, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/category/mainCategory';
import { redirect, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../State/Store';
const Navbar = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
    const [selectedCategory, setSelectedCategory] = useState("men");
    const [showCategorySheet, setShowCategorySheet] = useState(false);
    const navigate = useNavigate();

    const { auth } = useAppSelector(store => store);
    return (
        <>
            <Box className="sticky top-0 left-0 right-0 bg-white " sx={{ zIndex: 2 }}>
                <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
                    <div className='flex items-center gap-9'>
                        <div className='flex items-center gap-2'>
                            {!isLarge && <IconButton>
                                <MenuIcon />
                            </IconButton>}
                            <h1 onClick={() => navigate("/")} className='logo cursor-pointer text-lg md:text-2xl text-primary-color'>
                                Tsuki Shop
                            </h1>
                        </div>
                        <ul className='flex items-center font-medium text-gray-800'>
                            {mainCategory.map((item) =>
                                <li
                                    onMouseLeave={() => { setShowCategorySheet(false) }}
                                    onMouseEnter={() => {
                                        setShowCategorySheet(true);
                                        setSelectedCategory(item.categoryId);
                                    }}
                                    className='mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center'>{item.name}</li>)}
                        </ul>
                    </div>
                    <div className='flex gap-1 lg:gap-6 items-center'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        {auth.user ? <Button onClick={() => navigate("/account/orders")} className='flex items-center gap-2'>
                            <Avatar
                                sx={{ width: 29, heigth: 29 }}
                                src='https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg' />
                            <h1 className='font-semibold hidden lg:block'>
                                {auth.user?.fullName}
                            </h1>
                        </Button> : <Button onClick={() => navigate("/login")} variant='contained'>Login</Button>}
                        <IconButton>
                            <FavoriteBorder sx={{ fontSize: 29 }} />
                        </IconButton>
                        <IconButton onClick={() => navigate("/cart")}>
                            <AddShoppingCart className='text-gray-700' sx={{ fontSize: 29 }} />
                        </IconButton>
                        {isLarge && <Button onClick={() => navigate("/become-seller")} startIcon={<Storefront />} variant='outlined'>
                            Become Seller
                        </Button>}
                    </div>
                </div>
                {showCategorySheet && <div
                    onMouseLeave={() => setShowCategorySheet(false)}
                    onMouseEnter={() => setShowCategorySheet(true)}
                    className='categorySheet absolute top-[4.41rem] left-20 right-20'>
                    <CategorySheet selectedCategory={selectedCategory} />
                </div>}
            </Box>
        </>
    )
}

export default Navbar