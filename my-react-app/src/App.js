import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import ProductDetail from './components/ProductDetail.js';
import ProductList from './components/ProductList.js';
import Cart from './components/Cart.js';
import Filter from './components/Filter.js';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productlist/laptop">Product List</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/filter" element={<Filter/>} />
        <Route path="/productdetail/:id" element={<ProductDetail/>} />
        <Route path="/productlist/:category" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
