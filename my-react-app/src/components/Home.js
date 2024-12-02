import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { formatCash } from "../utils/formatCash";
import { ProductsCard } from "./ProductsCard";
function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/list`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        } else {
          console.error("Error: Data fetch was not successful", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="mb-4 mt-20">
        <Navbar />
      </div>

      <div className="flex mx-36">
        <div className="w-1/5 bg-gray-100 p-4 mr-4">
          <ul className="space-y-10 py-4">
            <li
              className="relative flex items-center justify-between"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link to="/productlist/laptop">
                <span className="flex items-center">
                    <img src="/all.svg" alt="" />
                    <i className="laptop mr-2"></i> Tất cả sản phẩm
                </span>
              </Link>

            </li>
            <li className="flex items-center justify-between">
              <Link to="/productlist/laptop">
                <span className="flex items-center">
                    <img src="/lap.svg" alt="" />
                    <i className="gamepad mr-2"></i> Laptop 
                </span>
              </Link>
            </li>

            <li className="flex items-center justify-between">
              <Link to="/productlist/pc">
                <span className="flex items-center">
                <img src="/pc.svg" alt="" />
                  <i className="desktop mr-2"></i> PC
                </span>
              </Link>
                {/* <Link to="/pc">
                    <span className="flex items-center">
                        <img src="/pc.svg" alt="" />
                        <i className="gamepad mr-2"></i> Pc 
                    </span>
                </Link> */}
            </li>
            <li className="flex items-center justify-between">
                <Link to="/component">
                    <span className="flex items-center">
                        <img src="/comp.svg" alt="" />
                        <i className="gamepad mr-2"></i> Main Cpu Vga
                    </span>
                </Link>
            </li>

            <li className="flex items-center justify-between">
                <Link to="/acs">
                    <span className="flex items-center">
                        <img src="/acs.svg" alt="" />
                        <i className="gamepad mr-2"></i> Phụ kiện  
                    </span>
                </Link>
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center">
                <img src="/sup.svg" alt="" />
                <i className="gift mr-2"></i> Dịch vụ và Hỗ trợ
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
              <img src="b.png" alt="Laptop" />
            </div>
            <div className="">
              <img src="c.png" alt="Laptop" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" mx-36 mt-8">
          <div className="bg-white p-4 ">
            {/* Tiêu đề */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Laptop bán chạy</h1>
            </div>

            {/* Danh sách hãng */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4"></div>
            </div>

            {/* Grid  */}
            <div className="grid grid-cols-5 gap-4 ">
              {products.slice(0, 5).map((product) => (
                <Link
                  to={`/productdetail/${product.product_id}`}
                  key={product.product_id}
                  
                >
                  <div
                    key={product.product_id}
                    className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg"
                  >
                    <ProductsCard product={product} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-36 mt-8">
          <div className="bg-white p-4 ">
            {/* Tiêu đề */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Pc bán chạy</h1>
            </div>

            {/* Danh sách hãng */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4"></div>
            </div>

            {/* Grid  */}
            <div className="grid grid-cols-5 gap-4 ">
              {products.slice(0, 5).map((product) => (
                <Link
                  to={`/productdetail/${product.product_id}`}
                  key={product.product_id}
                >
                  <div
                    key={product.product_id}
                    className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg"
                  >
                    <ProductsCard product={product} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-36 mt-8 mb-12">
          <div className="bg-white p-4 ">
            {/* Tiêu đề */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Phụ kiện bán chạy</h1>
            </div>

            {/* Danh sách hãng */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4"></div>
            </div>

            {/* Grid  */}
            <div className="grid grid-cols-5 gap-4 ">
              {products.slice(0, 5).map((product) => (
                <Link
                  to={`/productdetail/${product.product_id}`}
                  key={product.product_id}
                >
                  <div
                    key={product.product_id}
                    className="product-card bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg"
                  >
                    <ProductsCard product={product} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
