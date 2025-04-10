import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, ThemeProvider } from '@mui/material';
import Navbar from './customer/components/Navbar/Navbar';
import customTheme from './Theme/customTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import SellerDashBoard from './seller/pages/SellerDashBoard/SellerDashBoard';
import AdminDashboard from './admin/pages/Dashboard/Dashboard';
import { fetchProducts } from './State/fetchProdutc';
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchSellerProfile } from './State/seller/sellerSlice';
import Auth from './customer/pages/Auth/Auth';
import { fetchUserProfile } from './State/AuthSlice';
import PayMentSuccess from './customer/pages/PayMentSuccess';

function App() {
  const dispatch = useAppDispatch();
  const { seller, auth } = useAppSelector(store => store);
  const naigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""))
  }, [])

  useEffect(() => {
    if (seller.profile) {
      naigate("/seller")
    }
  }, [seller.profile])

  useEffect(() => {
    dispatch(fetchUserProfile({ jwt: auth.jwt || localStorage.getItem("jwt") }))
  }, [auth.jwt])

  return (
    <ThemeProvider theme={customTheme} >
      <div>
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
        {/* <Account /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Auth />} />
          <Route path='/products/:category' element={<Product />} />
          <Route path='/reviews/:productId' element={<Review />} />
          <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment-success/:orderId' element={<PayMentSuccess />} />
          <Route path='/become-seller' element={<BecomeSeller />} />
          <Route path='/account/*' element={<Account />} />
          <Route path='/seller/*' element={<SellerDashBoard />} />
          <Route path='/admin/*' element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider >
  );
}

export default App;
