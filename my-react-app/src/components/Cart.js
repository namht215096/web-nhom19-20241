import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Sản Phẩm 1",
            price: 1,
            originalPrice: 99490000,
            quantity: 1,
            image: "https://placehold.co/100x100",
        },
        {
            id: 2,
            name: "Sản Phẩm 2",
            price: 2,
            originalPrice: 50900000,
            quantity: 2,
            image: "https://placehold.co/100x100",
        },
    ]);

    const formatCurrency = (amount) => amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    const handleQuantityChange = (id, delta) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: Math.max(product.quantity + delta, 1) }
                    : product
            )
        );
    };

    const handleInputChange = (id, value) => {
        const newQuantity = parseInt(value, 10);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === id ? { ...product, quantity: newQuantity } : product
                )
            );
        }
    };

    const handleRemoveProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const totalAmount = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );

    return (
        <div>
            <div className="mb-4 mt-20">
                <Navbar />
            </div>

            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                    <a href="#" className="text-blue-500 text-sm mb-4 inline-block">
                        &lt; Mua thêm sản phẩm khác
                    </a>
                    <div className="border rounded-lg">
                        <div className="p-4">
                            {products.map((product) => (
                                <div className="flex items-center mb-8" key={product.id}>
                                    <img
                                        src={product.image}
                                        alt={`Ảnh ${product.name}`}
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <div className="text-red-500 text-lg font-semibold">
                                            {formatCurrency(product.price)}
                                        </div>
                                        <div className="text-gray-400 line-through">
                                            {formatCurrency(product.originalPrice)}
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            className="border border-gray-300 rounded px-2 py-1"
                                            onClick={() => handleQuantityChange(product.id, -1)}
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={product.quantity}
                                            onChange={(e) => handleInputChange(product.id, e.target.value)}
                                            className="w-12 text-center border-gray-300"
                                        />
                                        <button
                                            className="border border-gray-300 rounded px-2 py-1"
                                            onClick={() => handleQuantityChange(product.id, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="text-gray-400 ml-4"
                                        onClick={() => handleRemoveProduct(product.id)}
                                    >
                                        Xóa
                                    </button>
                                </div>
                            ))}

                            <div className="pt-4">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-semibold">Tổng tiền:</span>
                                    <span className="text-red-500 text-lg font-semibold">
                                        {formatCurrency(totalAmount)}
                                    </span>
                                </div>
                                <button className="bg-red-500 text-white py-3 w-full rounded-lg font-semibold">
                                    ĐẶT HÀNG NGAY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Cart;
