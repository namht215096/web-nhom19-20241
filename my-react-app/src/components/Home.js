import React, { useEffect, useState } from 'react';
import Navbar from "./Navbar";
function Home() { 
    const [isHovered, setIsHovered] = useState(false);
    const [products, setProducts] = useState([]);
    

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
    

    return (
        <div>
            {/* <FormModal/> */}
            <div className="mb-4">
                <Navbar/>
            </div>

            <div className="flex mx-36">
                <div className="w-1/5 bg-gray-100 p-4 mr-4">
                    <ul className="space-y-4">
                        <li className="relative flex items-center justify-between"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <span className="flex items-center">
                                <i className="laptop mr-2"></i> Laptop
                            </span>
                            
                            {isHovered && (
                            <div className="absolute top-full mt-2 p-4 bg-gray-200 shadow-lg">
                            Đây là nội dung hiển thị khi hover
                            </div>
                        )}
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="gamepad mr-2"></i> Laptop Gaming
                            </span>
                            
                        
                        </li>
                        
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="desktop mr-2"></i> PC GVN
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="microchip mr-2"></i> Main, CPU, VGA
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="hdd mr-2"></i> Case, Nguồn, Tản
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="memory mr-2"></i> Ổ cứng, RAM, Thẻ nhớ
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="volume-up mr-2"></i> Loa, Micro, Webcam
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="tv mr-2"></i> Màn hình
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="keyboard mr-2"></i> Bàn phím
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="mouse mr-2"></i> Chuột + Lót chuột
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="headphones mr-2"></i> Tai Nghe
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="chair mr-2"></i> Ghế - Bàn
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="network-wired mr-2"></i> Phần mềm, mạng
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="gamepad mr-2"></i> Handheld, Console
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="plug mr-2"></i> Phụ kiện (Hub, sạc, cáp..)
                            </span>
                            
                        </li>
                        <li className="flex items-center justify-between">
                            <span className="flex items-center">
                                <i className="gift mr-2"></i> Dịch vụ và thông tin khác
                            </span>
                            
                        </li>
                    </ul>
                </div>
                <div className="w-4/5 ">
                    <div className="flex ">
                        <div className="w-full cursor-pointer">
                            
                                <img src="nvidiabaner.jpg" alt="" />
                        
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="">
                            <img src="Screen Shot 2024-11-22 at 07.13.05.png" alt="" />
                        </div>
                        <div className="">
                            
                            <img src="b.png" alt="Laptop"/>
                        </div>
                        <div className="">
                            <img src="c.png" alt="Laptop"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
            <div className=" mx-36">
                <div className="bg-white p-4 rounded-lg shadow">
                    {/* Tiêu đề */}
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Laptop</h1>
                    </div>

                    {/* Danh sách hãng */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-4"></div>
                        <a href="#" className="text-blue-500">Xem tất cả</a>
                    </div>

                    {/* Grid sản phẩm */}
                    <div className="grid grid-cols-5 gap-4 ">
                        {products.map((product) => (
                            <div key={product.product_id} className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg">
                                <img src={product.img} alt={`Image of ${product.product_name}`} className="w-full h-auto" />
                                <h2 className="mt-2 text-lg font-bold">{product.product_name}</h2>
                                <div className="mt-2">
                                    <span className="price text-red-500 ml-2 font-bold">{product.price}</span>
                                </div>
                                <div className="mt-2 flex items-center">
                                    <span className="text-gray-500">Stock: {product.stock}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                </div>
            </div>
            </div>
        </div>
        
    );
 } export default Home;
    