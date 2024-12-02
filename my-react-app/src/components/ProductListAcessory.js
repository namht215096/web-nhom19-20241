import React from 'react';
import List from './List';

function ProductListAcessory() {
    return <List title="Laptop" apiEndpoint="http://localhost:8080/api/v1/products/list" />;
}

export default ProductListAcessory;
