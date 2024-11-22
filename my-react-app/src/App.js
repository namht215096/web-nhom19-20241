import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import ProductDetail from './components/ProductDetail.js';
import ProductList from './components/ProductList.js';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"></Link>
        <Link to="/productdetail"></Link>
        <Link to="/productlist"></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productdetail" element={<ProductDetail/>} />
        <Route path="/productlist" element={<ProductList/>} />
      </Routes>
    </Router>
  );
}

export default App;
