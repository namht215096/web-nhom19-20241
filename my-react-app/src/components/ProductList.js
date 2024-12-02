import React from 'react';
import List from './List';

function ProductList() {
    return <List title="Tất cả sản phẩm" apiEndpoint="http://localhost:8080/api/v1/products/list" />;
}

export default ProductList;
