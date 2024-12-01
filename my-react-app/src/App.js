import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import ProductDetail from './components/ProductDetail.js';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/productdetail/:id"></Link>
        <Link to="/productlist"></Link>
        <Link to="/cart"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productdetail/:id" element={<ProductDetail/>} />
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
