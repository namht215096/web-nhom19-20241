import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { formatCash } from "../utils/formatCash";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please log in to view your cart.");
            navigate("/"); // Redirect to login page
            return;
        }

        fetch("http://localhost:8080/api/v1/cart", {
            headers: {
                "Authorization": `Bearer ${token}` // Include token in headers
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setCartItems(data.data);
                } else {
                    console.error("Error fetching cart data", data);
                }
            })
            .catch((error) => console.error("Error:", error));
    }, [navigate]);

    console.log(cartItems);

    const formatCurrency = (amount) =>
        parseFloat(amount).toLocaleString("vi-VN", { style: "currency", currency: "VND" });

    const totalAmount = cartItems.reduce(
        (total, item) => total + parseFloat(item.price / 100) * (100 - item.discount) * item.quantity,
        0
    );

    return (
        <div>
            <div className="mb-4 mt-20">
                <Navbar />
            </div>

            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                    <Link to="/" className="text-blue-500 text-sm mb-4 inline-block">
                        &lt; Mua thêm sản phẩm khác
                    </Link>
                    <div className="border rounded-lg">
                        <div className="p-4">
                            {cartItems.map((item) => (
                                <div className="flex items-center mb-8" key={item.cart_item_id}>
                                    <img
                                        src={item.img}
                                        alt={`Ảnh ${item.product_name}`}
                                        className="w-24 h-24 object-cover mr-4"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{item.product_name}</h2>
                                        {item.discount > 0 && (
                                            <div className="text-gray-400 line-through">
                                                {formatCash(item.price)}
                                            </div>
                                        )}
                                        <div className="text-red-500 font-bold text-3xl">
                                            {formatCash((item.price / 100) * (100 - item.discount))}
                                        </div>
                                        <div className="text-gray-400">
                                            Số lượng: {item.quantity}
                                        </div>
                                    </div>
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
