import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/Sellers/SellersTable'
import Coupon from '../admin/Coupon/Coupon'
import AddNewCouponForm from '../admin/Coupon/AddNewCouponForm'
import GridTable from '../admin/HomePage/GridTable'
import ElectronicTable from '../admin/HomePage/ElectronicTable'
import ShopByCategoryTable from '../admin/HomePage/ShopByCategoryTable'
import Deal from '../admin/HomePage/Deal'

const AdminRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<SellersTable />} />
                <Route path='/coupon' element={<Coupon />} />
                <Route path='/add-coupon' element={<AddNewCouponForm />} />
                <Route path='/home-grid' element={<GridTable />} />
                <Route path='/electronics-category' element={<ElectronicTable />} />
                <Route path='/shop-by-category' element={<ShopByCategoryTable />} />
                <Route path='/deals' element={<Deal />} />
            </Routes>
        </div>
    )
}

export default AdminRoutes