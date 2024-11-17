<html>
<head>
    <title>Web Page</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100">
    <div id="root"></div>
    <script type="text/babel">
        const App = () => {
            return (
                <div className="flex">
                    <aside className="w-1/6 bg-white p-4">
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-laptop"></i>
                                <span>Laptop</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-gamepad"></i>
                                <span>Laptop Gaming</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-desktop"></i>
                                <span>PC GVN</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-microchip"></i>
                                <span>Main, CPU, VGA</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-hdd"></i>
                                <span>Case, Nguồn, Tản</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-memory"></i>
                                <span>Ổ cứng, RAM, Thẻ nhớ</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-volume-up"></i>
                                <span>Loa, Micro, Webcam</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-tv"></i>
                                <span>Màn hình</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-keyboard"></i>
                                <span>Bàn phím</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-mouse"></i>
                                <span>Chuột + Lót chuột</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-headphones"></i>
                                <span>Tai Nghe</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-chair"></i>
                                <span>Ghế - Bàn</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-network-wired"></i>
                                <span>Phần mềm, mạng</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-gamepad"></i>
                                <span>Handheld, Console</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-plug"></i>
                                <span>Phụ kiện (Hub, sạc, cáp...)</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <i className="fas fa-info-circle"></i>
                                <span>Dịch vụ và thông tin khác</span>
                            </li>
                        </ul>
                    </aside>
                    <main className="w-5/6 p-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-3">
                                <div className="bg-blue-500 text-white p-4 rounded-lg relative">
                                    <h2 className="text-2xl font-bold">PC GVN x MSI</h2>
                                    <p className="text-lg">Giá chỉ từ <span className="text-yellow-300">24.990.000đ</span></p>
                                    <p>Khách hàng mua PC GVN x MSI tại GEARVN sẽ có 1 cơ hội để nhận</p>
                                    <p className="text-lg font-bold">01 iPhone 16 Promax Trị giá 34.990.000đ</p>
                                    <img src="https://placehold.co/150x150" alt="PC and iPhone" className="absolute top-4 right-4 w-1/4"/>
                                </div>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">MIỄN PHÍ NÂNG CẤP</h3>
                                <p>32GB RAM khi build PC</p>
                                <p>Bộ quà tặng trị giá lên đến <span className="text-red-500">1.880.000đ</span></p>
                                <p className="text-sm text-gray-500">Miễn phí giao hàng</p>
                                <img src="https://placehold.co/150x150" alt="PC" className="w-full"/>
                            </div>
                            <div className="bg-pink-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">LOA HAY GIÁ TỐT</h3>
                                <p>Ưu đãi cực kì hấp dẫn</p>
                                <p>Giá chỉ từ <span className="text-red-500">280.000đ</span></p>
                                <p className="text-sm text-gray-500">Giao hàng toàn quốc</p>
                                <img src="https://placehold.co/150x150" alt="Speakers" className="w-full"/>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">LAPTOP GEARVN</h3>
                                <p>Giảm giá lên đến 30%</p>
                                <p>Giá chỉ từ <span className="text-red-500">9.990.000đ</span></p>
                                <p className="text-sm text-gray-500">Miễn phí giao hàng</p>
                                <img src="https://placehold.co/150x150" alt="Laptop" className="w-full"/>
                            </div>
                            <div className="bg-pink-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">LAPTOP GEARVN</h3>
                                <p>Ưu đãi cực kì hấp dẫn</p>
                                <p>Giá chỉ từ <span className="text-red-500">14.490.000đ</span></p>
                                <p className="text-sm text-gray-500">Miễn phí giao hàng</p>
                                <img src="https://placehold.co/150x150" alt="Laptop" className="w-full"/>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">PC i5 4060</h3>
                                <p>Học tập - Làm việc - Giải trí</p>
                                <p>Tặng tản nhiệt Corsair trị giá <span className="text-red-500">4.000.000đ</span></p>
                                <p className="text-sm text-gray-500">Miễn phí giao hàng</p>
                                <img src="https://placehold.co/150x150" alt="PC" className="w-full"/>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg col-span-2">
                                <h3 className="text-xl font-bold">ĐÓN DEAL XỊN</h3>
                                <p>RINH ƯU ĐÃI</p>
                                <p>VOUCHER <span className="text-red-500">500K</span></p>
                                <p>ƯU ĐÃI GIẢM ĐẾN <span className="text-red-500">-50%</span></p>
                                <p>HSSV GIẢM THÊM <span className="text-red-500">300K</span></p>
                                <p>MUA 1 ĐƯỢC 2</p>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">MÀN HÌNH CHÍNH HÃNG</h3>
                                <p>Giao hàng nội thành 2H</p>
                                <p>Giảm đến <span className="text-red-500">51%</span></p>
                                <p className="text-sm text-gray-500">Giao hàng toàn quốc</p>
                                <img src="https://placehold.co/150x150" alt="Monitor" className="w-full"/>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">GAMING GEAR</h3>
                                <p>BIG SALE BIG DEAL</p>
                                <p>Giá chỉ từ <span className="text-red-500">390.000đ</span></p>
                                <p className="text-sm text-gray-500">Giao hàng toàn quốc</p>
                                <img src="https://placehold.co/150x150" alt="Gaming Gear" className="w-full"/>
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <h3 className="text-xl font-bold">PC I5 RX6600</h3>
                                <p>Giao hàng nội thành 2H</p>
                                <p>Giá chỉ từ <span className="text-red-500">15.990.000đ</span></p>
                                <p className="text-sm text-gray-500">Giao hàng toàn quốc</p>
                                <img src="https://placehold.co/150x150" alt="PC" className="w-full"/>
                            </div>
                        </div>
                    </main>
                </div>
            );
        };

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
