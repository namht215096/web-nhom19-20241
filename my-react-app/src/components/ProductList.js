import React from 'react';

// Dữ liệu sản phẩm
const products = [
    {
        name: "Laptop gaming MSI Katana 15 B13VEK 252VN",
        image: "https://placehold.co/300x200?text=Laptop+MSI+Katana",
        specs: ["i7-13620H", "RTX 4050", "8 GB", "512 GB", "15.6 inch FHD", "144 Hz"],
        oldPrice: "33.990.000₫",
        newPrice: "22.990.000₫",
        discount: "-32%",
        rating: 5.0,
        reviews: 1
    },
    {
        name: "Laptop gaming Lenovo LOQ 15IAX9 83GS001RVN",
        image: "https://placehold.co/300x200?text=Laptop+Lenovo+LOQ",
        specs: ["i5-12450HX", "RTX 3050", "12 GB", "512 GB", "15.6 inch FHD", "144 Hz"],
        oldPrice: "21.290.000₫",
        newPrice: "20.790.000₫",
        discount: "-2%",
        rating: 4.8,
        reviews: 13
    },
    {
        name: "Laptop gaming Lenovo LOQ 15IRX9 83DV00D5VN",
        image: "https://placehold.co/300x200?text=Laptop+Lenovo+LOQ",
        specs: ["i7-13650HX", "RTX 4050", "16 GB", "512 GB", "15.6 inch FHD", "144 Hz"],
        oldPrice: "28.990.000₫",
        newPrice: "28.490.000₫",
        discount: "-2%",
        rating: 0.0,
        reviews: 0
    },
    {
        name: "Laptop gaming Acer Nitro 16 Phoenix AN16 41 R60F",
        image: "https://placehold.co/300x200?text=Laptop+Acer+Nitro",
        specs: ["R7-7840HS", "RTX 4050", "8 GB", "512 GB", "16 inch WQXGA", "165 Hz"],
        oldPrice: "35.990.000₫",
        newPrice: "24.990.000₫",
        discount: "-31%",
        rating: 0.0,
        reviews: 0
    },
    {
        name: "Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM",
        image: "https://placehold.co/300x200?text=Laptop+Acer+Nitro",
        specs: ["R7-7840HS", "RTX 4060", "16 GB", "512 GB", "16 inch WQXGA", "165 Hz"],
        oldPrice: "39.990.000₫",
        newPrice: "28.990.000₫",
        discount: "-28%",
        rating: 5.0,
        reviews: 1
    },
    {
        name: "Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM",
        image: "https://placehold.co/300x200?text=Laptop+Acer+Nitro",
        specs: ["R7-7840HS", "RTX 4060", "16 GB", "512 GB", "16 inch WQXGA", "165 Hz"],
        oldPrice: "39.990.000₫",
        newPrice: "28.990.000₫",
        discount: "-28%",
        rating: 5.0,
        reviews: 1
    },
    {
        name: "Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM",
        image: "https://placehold.co/300x200?text=Laptop+Acer+Nitro",
        specs: ["R7-7840HS", "RTX 4060", "16 GB", "512 GB", "16 inch WQXGA", "165 Hz"],
        oldPrice: "39.990.000₫",
        newPrice: "28.990.000₫",
        discount: "-28%",
        rating: 5.0,
        reviews: 1
    }
];

function ProductList() {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-4 rounded-lg shadow">
                {/* Tiêu đề */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Laptop gaming bán chạy</h1>
                    
                </div>

                {/* Danh sách hãng */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-700">ASUS</a>
                        <a href="#" className="text-gray-700">ACER</a>
                        <a href="#" className="text-gray-700">MSI</a>
                        <a href="#" className="text-gray-700">LENOVO</a>
                        <a href="#" className="text-gray-700">GIGABYTE</a>
                        <a href="#" className="text-gray-700">DELL</a>
                    </div>
                    <a href="#" className="text-blue-500">Xem tất cả</a>
                </div>

                {/* Grid sản phẩm */}
                <div className="grid grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <div key={index} className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg">
                            <img src={product.image} alt={`Image of ${product.name}`} className="w-full h-auto" />
                            <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
                            <ul className="mt-2 text-gray-600">
                                {product.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>{spec}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2">
                                <span className="price text-red-500 ml-2 font-bold">{product.newPrice}</span>
                            </div>
                            <div className="mt-2 flex items-center">
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
