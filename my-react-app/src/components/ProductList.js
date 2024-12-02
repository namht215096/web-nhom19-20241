import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatCash } from '../utils/formatCash';
import Navbar from './Navbar';
import { ProductsCard } from './ProductsCard';
import Footer from './Footer';

import List from './List';

function ProductList() {
    return <List title="Tất cả sản phẩm" apiEndpoint="http://localhost:8080/api/v1/products/filter" />;
}

export default ProductList;
