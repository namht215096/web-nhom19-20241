import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import ProductDetail from './components/ProductDetail.js';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import ProductListLaptop from './components/ProductListLaptop.js';
import ProductListPc from './components/ProductListPc.js';
import ProductListAccesory from './components/ProductListAcessory.js';
import ProductListComponent from './components/ProductListComponent.js';

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
        <Route path="/productdetail/:id" element={<ProductDetail/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/pc" element={<ProductListPc/>} />
        <Route path="/laptop" element={<ProductListLaptop/>} />
        <Route path="/acs" element={<ProductListAccesory/>} />
        <Route path="/component" element={<ProductListComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
