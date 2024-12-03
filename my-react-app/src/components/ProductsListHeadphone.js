import React from 'react';
import List from './List';

function ProductsListHeadphone() {
    return <List title="Tai nghe" apiEndpoint="http://localhost:8080/api/v1/products/filter?category=headphone" />;
}

export default ProductsListHeadphone;
