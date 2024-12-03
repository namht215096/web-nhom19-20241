import React from 'react';
import List from './List';

function ProductsListKeyboard() {
    return <List title="Bàn phím" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=keyboard" />;
}

export default ProductsListKeyboard;
