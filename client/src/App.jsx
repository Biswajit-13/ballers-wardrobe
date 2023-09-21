import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Cart from './pages/cart';

import { CartProvider } from './cartContext'; // Import CartProvider from your context file
import Success from './pages/success';
import Cancel from './pages/cancel';
import Login from './pages/login';
import ProductDetails from './pages/productDetails';
import Register from './pages/register';
import VerificationMiddleware from './pages/verificationMiddleware';
import Dashboard from './pages/dashboard';
import Orders from './pages/orders';
import Billing from './pages/billing';
import AddBilling from './pages/addbilling';
import Home from './pages/home';
import WishList from './pages/wishList';

const App = () => {
  return (
    <CartProvider>
      <div className='bg-bg'>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<VerificationMiddleware />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/addbilling" element={<AddBilling />} />
            <Route path="/billing" element={<Billing />} />
            <Route path='/wishlist' element={<WishList />} />
          </Routes>
        </Router>

      </div>
    </CartProvider>
  );
}

export default App;
