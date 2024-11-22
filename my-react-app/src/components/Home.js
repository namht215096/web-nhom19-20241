import React, { useState } from "react";
import Navbar from "./Navbar";
function Home() { 
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
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
                    <div className="w-full ">
                        <div className="bg-black text-white p-6 mb-4 h-80 ">
                            <h2 className="text-3xl font-bold">GeForce RTX 40 Series</h2>
                            <p className="mt-2">BEYOND FAST</p>
                            <p className="mt-4">NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture which delivers a quantum leap in both performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest latency. Discover revolutionary new ways to create and unprecedented workflow acceleration.</p>
                            
                        </div>
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
                    <div className="bg-yellow-100 p-4">
                        <h3 className="text-blue-600 font-bold">ĐÓN DEAL XỊN</h3>
                        <p className="text-blue-600">RINH ƯU ĐÃI</p>
                        <p className="text-2xl font-bold text-blue-600">VOUCHER 500K</p>
                        <p className="text-blue-600">ƯU ĐÃI GIẢM ĐẾN -50%</p>
                        <p className="text-blue-600">HSBV GIẢM THÊM 300K</p>
                        <p className="text-blue-600">MUA 1 ĐƯỢC 2</p>
                    </div>
                    <div className="bg-yellow-100 p-4">
                        <h3 className="text-blue-600 font-bold">MÀN HÌNH CHÍNH HÃNG</h3>
                        <p className="text-blue-600">Giao hàng nội thành 2H</p>
                        <p className="text-2xl font-bold text-blue-600">Giảm đến 51%</p>
                        <p className="text-blue-600">Giao hàng toàn quốc</p>
                        <img src="https://placehold.co/150x100" alt="Monitor"/>
                    </div>
                    <div className="bg-blue-100 p-4">
                        <h3 className="text-orange-600 font-bold">GAMING GEAR</h3>
                        <p className="text-blue-600">BIG SALE BIG DEAL</p>
                        <p className="text-2xl font-bold text-blue-600">Giá chỉ từ 390.000đ</p>
                        <p className="text-blue-600">Giao hàng toàn quốc</p>
                        <img src="https://placehold.co/150x100" alt="Gaming gear"/>
                    </div>
                    <div className="bg-blue-100 p-4">
                        <h3 className="text-orange-600 font-bold">PC i5 RX6600</h3>
                        <p className="text-blue-600">Giao hàng nội thành 2H</p>
                        <p className="text-2xl font-bold text-blue-600">Giá chỉ từ 15.990.000đ</p>
                        <p className="text-blue-600">Giao hàng toàn quốc</p>
                        <img src="https://placehold.co/150x100" alt="PC build with RGB lighting"/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
 } export default Home;
    