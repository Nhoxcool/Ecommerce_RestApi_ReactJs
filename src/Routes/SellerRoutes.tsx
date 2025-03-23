import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../seller/pages/SellerDashBoard/DashBoard'
import Products from '../seller/pages/Products/Products'
import AddProduct from '../seller/pages/AddProduct/AddProduct'
import Profile from '../seller/pages/Account/Profile'
import Transaction from '../seller/pages/Payment/Transaction'
import Orders from '../seller/pages/Orders/Orders'
import Payment from '../seller/pages/Payment/Payment'

const SellerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/account' element={<Profile />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/transaction' element={<Transaction />} />
        </Routes>
    )
}

export default SellerRoutes