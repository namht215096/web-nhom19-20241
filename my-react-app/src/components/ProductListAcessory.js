import React from 'react';
import List from './List';

function ProductListAcessory() {
    return <List title="Phụ kiện" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=accessories" />;
}

export default ProductListAcessory;
