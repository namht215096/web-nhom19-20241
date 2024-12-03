import React from 'react';
import List from './List';

function ProductsListCase() {
    return <List title="Thùng case" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=case" />;
}

export default ProductsListCase;
