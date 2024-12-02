import React from 'react';
import List from './List';

function ProductListCPU() {
    return <List title="Laptop" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=cpu" />;
}

export default ProductListCPU;
