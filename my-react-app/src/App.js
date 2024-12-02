import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import ProductDetail from './components/ProductDetail.js';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import ProductListLaptop from './components/ProductListLaptop.js';
import ProductListPc from './components/ProductListPc.js';
import ProductListAccesory from './components/ProductListAcessory.js';
import ProductListVGA from './components/ProductListVGA.js';
import ProductListCPU from './components/ProductListCPU.js';
import Filter from './components/Filter.js';
import Profile from './components/Profile.js';
import CartPage from './components/CartPage.js';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/productdetail/:id"></Link>
        <Link to="/productlist"></Link>
        <Link to="/cart"></Link>
        <Link to="/pc"></Link>
        <Link to="/laptop"></Link>
        <Link to="/acs"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/filter" element={<Filter/>} />
        <Route path="/productdetail/:id" element={<ProductDetail/>} />
        <Route path="/productlist/:category" element={<ProductList/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/productlist/pc" element={<ProductListPc/>} />
        <Route path="/productlist/laptop" element={<ProductListLaptop/>} />
        <Route path="/productlist/acs" element={<ProductListAccesory/>} />
        <Route path="/productlist/vga" element={<ProductListVGA/>} />
        <Route path="/productlist/cpu" element={<ProductListCPU/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
