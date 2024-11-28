import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/products/list`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setProducts(data.data);
                } else {
                    console.error('Error: Data fetch was not successful', data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Laptop</h1>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        {currentProducts.map((product) => (
                            <Link
                                to={`/productdetail/${product.product_id}`}
                                key={product.product_id}
                                className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg"
                            >
                                <img src={product.img} alt={`Image of ${product.product_name}`} className="w-full h-auto" />
                                <h2 className="mt-2 text-lg font-bold">{product.product_name}</h2>
                                <div className="mt-2">
                                    <span className="price text-red-500 ml-2 font-bold">{product.price}</span>
                                </div>
                                <div className="mt-2 flex items-center">
                                    <span className="text-gray-500">Stock: {product.stock}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center">
                        <ul className="flex space-x-2">
                            {pageNumbers.map((number) => (
                                <li
                                    key={number}
                                    className={`cursor-pointer px-3 rounded-md py-1 ${
                                        currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-100'
                                    }`}
                                    onClick={() => paginate(number)}
                                >
                                    {number}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
