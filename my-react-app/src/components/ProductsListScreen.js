import React from 'react';
import List from './List';

function ProductsListScreen() {
    return <List title="Màn hình" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=screen" />;
}

export default ProductsListScreen;
