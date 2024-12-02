import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatCash } from '../utils/formatCash';
import Navbar from './Navbar';
import { ProductsCard } from './ProductsCard';
import Footer from './Footer';

function ProductList() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/products/list/${category}`)
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
    }, [category]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            <div className="mb-4 mt-20">
              <Navbar />
            </div>
            
            <div className="container mx-auto p-4">
                <div className="bg-white p-4 ">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Tất cả sản phẩm</h1>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {currentProducts.map((product) => (
                            <Link
                                to={`/productdetail/${product.product_id}`}
                                key={product.product_id}
                                className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg"
                            >
                                <ProductsCard product={product} />
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
            <Footer/>
        </div>
    );
}

export default ProductList;
