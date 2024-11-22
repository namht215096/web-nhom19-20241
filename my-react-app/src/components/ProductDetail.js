import Navbar from "./Navbar";
function ProductDetail() { 
    return (
    <div>
        <Navbar/>
        <div className="max-w-5xl mx-auto p-4">
        <div className="text-sm text-gray-500 mb-4">
            <a href="#" className="text-blue-500">Trang chủ</a> / <a href="#" className="text-blue-500"> Sản phẩm</a> /
            <span> Laptop Asus </span>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md flex">
            <div className="w-1/2">
                <img src="https://placehold.co/400x400" alt="Product image of Asus ROG Cetra II Core with accessories" className="w-full rounded-lg mb-4" />
                <div className="flex space-x-2 overflow-x-auto">
                    <img src="https://placehold.co/100x100" alt="Thumbnail 1" className="w-20 h-20 rounded-lg" />
                    <img src="https://placehold.co/100x100" alt="Thumbnail 2" className="w-20 h-20 rounded-lg" />
                    <img src="https://placehold.co/100x100" alt="Thumbnail 3" className="w-20 h-20 rounded-lg" />
                    <img src="https://placehold.co/100x100" alt="Thumbnail 4" className="w-20 h-20 rounded-lg" />
                    <img src="https://placehold.co/100x100" alt="Thumbnail 5" className="w-20 h-20 rounded-lg" />
                </div>
            </div>
            <div className="w-1/2 pl-4">
                <h1 className="text-2xl font-bold mb-2">Laptop Asus</h1>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 text-lg"><i className="fas fa-star"></i> 5.0</span>
                    <a href="#" className="text-blue-500 ml-2">Xem đánh giá</a>
                </div>
                <div className="bg-yellow-100 p-2 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                        <span className="text-red-500 font-bold text-3xl">800.000đ</span>
                    </div>
                </div>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full mb-4">MUA NGAY</button>
                <div>
                    <h2 className="text-lg font-bold mb-2">Thông tin chung</h2>
                    <p><span className="font-bold">Hãng sản xuất:</span> Asus</p>
                    <p><span className="font-bold">Tình trạng:</span> Mới và Fullbox 100%</p>
                    <p><span className="font-bold">Bảo hành:</span> 24 Tháng</p>
                </div>
            </div>
        </div>
    
        <div className="flex justify-center py-4">
            <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Thông tin sản phẩm</h1>
                <h2 className="text-xl font-bold mb-2">Thông số kỹ thuật</h2>
                <table className="w-full text-left border-collapse">
                    <tbody>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Thương hiệu</td>
                            <td className="py-2">Asus</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Model</td>
                            <td className="py-2"> Asus xxx</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Kết nối</td>
                            <td className="py-2">Jack 3.5mm</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Chiều dài cáp</td>
                            <td className="py-2">1,25 m</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Kích thước driver</td>
                            <td className="py-2">9.4mm</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Cpu</td>
                            <td className="py-2"></td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Gpu</td>
                            <td className="py-2"></td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">ram</td>
                            <td className="py-2">20Hz - 40KHz</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">pin</td>
                            <td className="py-2">Đa hướng</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Trọng lượng</td>
                            <td className="py-2">18g</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 font-semibold">Phụ kiện</td>
                            <td className="py-2">Bao đựng tai nghe, 03 đôi Ear fin, 03 đôi Ear tip Mic splitter cable</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text-xl font-bold mt-6 mb-2">Đánh giá chi tiết tai nghe gaming in-ear ROG CETRA II CORE</h2>
                <p className="mb-4">Tai nghe Asus ROG Cetra II Core mang lại chất lượng âm thanh...</p>
            </div>
            <div className="w-1/3 ml-4">
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-xl font-bold mb-2">Sản phẩm tương tự</h2>
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/100x100" alt="Tai nghe Gaming Cooler Master CH331 USB" className="w-16 h-16 mr-4" />
                        <div>
                            <p className="font-semibold">Tai nghe Gaming Cooler Master CH331 USB</p>
                            <p className="text-red-500 font-bold">790.000₫ </p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/100x100" alt="Tai nghe Razer Kraken V4 X USB" className="w-16 h-16 mr-4" />
                        <div>
                            <p className="font-semibold">Tai nghe Razer Kraken V4 X USB</p>
                            <p className="text-gray-500 line-through">2.990.000₫</p>
                            <p className="text-red-500 font-bold">2.530.000₫ </p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/100x100" alt="Tai nghe SteelSeries Xbox Arctis Nova 5 Black" className="w-16 h-16 mr-4" />
                        <div>
                            <p className="font-semibold">Tai nghe SteelSeries Xbox Arctis Nova 5 Black</p>
                            <p className="text-gray-500 line-through">4.290.000₫</p>
                            <p className="text-red-500 font-bold">3.490.000₫ </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div>
    
    
    ); } export default ProductDetail;
    