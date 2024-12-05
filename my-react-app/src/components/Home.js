import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { formatCash } from "../utils/formatCash";
import { ProductsCard } from "./ProductsCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [productsPC, setProductsPC] = useState([]);
  const [productsVGA, setProductsVGA] = useState([]);
  const [numProducts, setNumProducts] = useState(5); 
  const [sortedproducts, setsortedProducts] = useState([]);
  
  useEffect(() => {
    const updateNumProducts = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setNumProducts(5);
      } else if (width > 992) {
        setNumProducts(4);
      } else if (width > 768) {
        setNumProducts(3);
      } else {
        setNumProducts(2);
      }

    };

    updateNumProducts(); 
    window.addEventListener("resize", updateNumProducts);

    return () => window.removeEventListener("resize", updateNumProducts); 
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/filter?category=laptop`)
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
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/filter?category=pc`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProductsPC(data.data);
        } else {
          console.error("Error: Data fetch was not successful ", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/filter?category=vga`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProductsVGA(data.data);
        } else {
          console.error("Error: Data fetch was not successful", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const rndInt = randomIntFromInterval(0, 10);
  return (
    <div>
      <div className="mb-4 mt-20">
          <Navbar />
      </div>
      <div className="lg:mx-20 flex-row">
        <div className="flex ">
          <div className="w-1/5 bg-gray-100 p-4 mr-4 hidden lg:block">
          <ul className="xl:space-y-11 lg:space-y-6 py-2 w-40">
            <li className="relative flex items-center justify-between">
              <Link
                to="/productlist"
                className="flex items-center hover:font-bold hover:text-red-600"
              >

                <img src="/all.svg" alt="all" />
                <div className="laptop mr-2"></div> Tất cả sản phẩm
              </Link>
            </li>
            <li className="flex items-center justify-between ">
              <Link
                to="/productlist/laptop"
                className="flex items-center hover:font-bold hover:text-red-600"
              >

                <img src="/lap.svg" alt="laptop" />
                <div className="gamepad mr-2"></div> Laptop
              </Link>
            </li>
            <li className="flex lg:flex items-center justify-between hover:font-bold hover:text-red-600">
              <Link
                to="/productlist/pc"
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/pc.svg" alt="pc" />
                <div className="desktop mr-2"></div> PC
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/vga" 
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/comp.svg" alt="Vga" />
                <div className="gamepad mr-2"></div> VGA
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/cpu" 
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/comp.svg" alt="cpu" />
                <div className="gamepad mr-2"></div> CPU
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/case"
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/case.svg" alt="case" />
                <div className="gamepad mr-2"></div> Case
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/screen"
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/screen.svg" alt="monitor" />
                <div className="gamepad mr-2"></div> Màn hình
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/keyboard"
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/acs.svg" alt="acs" />
                <div className="gamepad mr-2"></div> Bàn phím
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/mouse"
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/mouse.svg" alt="mouse" />
                <div className="gamepad mr-2"></div> Chuột
              </Link>
            </li>
            <li className="flex items-center justify-between">
              <Link
                to="/productlist/headphone"
                className="flex items-center hover:font-bold hover:text-red-600"
              >
                <img src="/sup.svg" alt="headphone" />
                <div className="gamepad mr-2"></div> Tai nghe
              </Link>
            </li>
          </ul>
          </div>
          <div className="lg:w-4/5 w-full ">
            <div className="flex ">
              <div className="w-full cursor-pointer">
                <img src="nvidiabaner.jpg" alt="ad" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="items-center">
                <img src="Screen Shot 2024-11-22 at 07.13.05.png" alt="ad" />
              </div>
              <div className="items-center">
                <img src="b.png" alt="ad1" />
              </div>
              <div className="items-center">
                <img src="c.png" alt="ad2" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" mt-8">
            <div className="bg-white p-4 ">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Laptop bán chạy</h1>
              </div>
              <div className={`grid grid-cols-5 lg:gap-3 gap-1`}>
                {products.slice(0, 5).map((product) => (
                  <Link
                    to={`/productdetail/${product.product_id}`}
                    key={product.product_id}
                  >
                    <div
                      key={product.product_id}
                      className="product-card p-4 rounded-lg shadow hover:shadow-lg"
                    >
                      <ProductsCard product={product} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-8">
            <div className="bg-white p-4 ">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Pc bán chạy</h1>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4"></div>
              </div>
              <div className={`grid grid-cols-5 lg:gap-3 gap-1`}>
                {products.slice(0, 5).map((product) => (
                  <Link
                    to={`/productdetail/${product.product_id}`}
                    key={product.product_id}
                  >
                    <div
                      key={product.product_id}
                      className="product-card p-4 rounded-lg shadow hover:shadow-lg"
                    >
                     <ProductsCard product={product} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-8 mb-12">
            <div className="bg-white p-4 ">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Linh kiện bán chạy</h1>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4"></div>
              </div>
              <div className={`grid grid-cols-5 lg:gap-3 gap-1`}>
                {products.slice(0, 5).map((product) => (
                  <Link
                    to={`/productdetail/${product.product_id}`}
                    key={product.product_id}
                  >
                    <div
                      key={product.product_id}
                      className="product-card p-4 rounded-lg shadow hover:shadow-lg"
                    >
                      <ProductsCard product={product} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
