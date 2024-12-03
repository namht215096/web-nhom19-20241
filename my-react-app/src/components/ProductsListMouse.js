import React from 'react';
import List from './List';

function ProductsListMouse() {
    return <List title="Chuột" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=mouse" />;
}

export default ProductsListMouse;
