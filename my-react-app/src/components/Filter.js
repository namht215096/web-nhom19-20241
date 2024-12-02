import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ProductsCard } from "./ProductsCard";
import Footer from "./Footer";
import { Button, Col, Input, Radio, Row, Slider, Space } from "antd";
import { formatCash } from "../utils/formatCash";

const Filter = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const [category, setCategory] = useState("laptop");
  const [name, setName] = useState("");
  const [priceRange, setPriceRange] = useState([20000000, 30000000]);

  useEffect(() => {
    // Fetch all products initially
    fetch("http://localhost:8080/api/v1/products/filter")
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

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPriceChange = (value) => {
    setPriceRange(value);
  };

  const onMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value, 10) || 0;
    setPriceRange([newMinPrice, priceRange[1]]);
  };

  const onMaxPriceChange = (e) => {
    const newMaxPrice = parseInt(e.target.value, 10) || 0;
    setPriceRange([priceRange[0], newMaxPrice]);
  };

  const handleSearch = () => {
    const query = `http://localhost:8080/api/v1/products/filter?category=${category}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&name=${name}`;
    fetch(query)
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
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 80 }}>
        <div className="mb-4 mt-20">
          <Navbar />
        </div>

        {/* filter */}
        <Row>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <div style={{ padding: "0 10% " }}>
              <h1
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#DC2626" }}
              >
                Tên sản phẩm
              </h1>
              <Input
                placeholder="Tên sản phẩm"
                value={name}
                onChange={onNameChange}
              />
            </div>
          </Col>
          <Col xl={12} style={{ padding: "0 10%", marginTop: 30 }}>
            <h1 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#DC2626" }}>
              Loại sản phẩm
            </h1>
            <Radio.Group buttonStyle="solid" onChange={onCategoryChange} value={category}>
              <Space direction="vertical">
                <Radio value="" style={{fontSize: 16, fontWeight: "bold"}}>Tất cả</Radio>
                <Radio value="laptop" style={{fontSize: 16, fontWeight: "bold"}}>Laptop</Radio>
                <Radio value="pc" style={{fontSize: 16, fontWeight: "bold"}}>PC</Radio>
                <Radio value="vga" style={{fontSize: 16, fontWeight: "bold"}}>VGA</Radio>
                <Radio value="cpu" style={{fontSize: 16, fontWeight: "bold"}}>CPU</Radio>
              </Space>
            </Radio.Group>
          </Col>
          <Col span={12} style={{ padding: "0 10%", marginTop: 30 }}>
            <h1 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#DC2626" }}>
              Tầm Giá
            </h1>
            <Slider
              style={{ width: "80%" }}
              range
              min={2000000}
              max={80000000}
              defaultValue={priceRange}
              onChange={onPriceChange}
            />
            <div style={{ marginTop: 20 }}>
              <h1
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
              >
                Giá từ: {formatCash(priceRange[0])} VNĐ
              </h1>
              <h1
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
              >
                Giá đến: {formatCash(priceRange[1])} VNĐ
              </h1>
            </div>
          </Col>
          <Col span={24} style={{ marginTop: 50, padding: "0 10%" }}>
            <Button
              type="primary"
              onClick={handleSearch}
              style={{
                width: "100%",
                height: 50,
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#DC2626",
              }}
            >
              Tìm kiếm
            </Button>
          </Col>
        </Row>

        <div className="container mx-auto p-4">
          <div className="bg-white p-4 ">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Tất cả sản phẩm</h1>
            </div>
            <div className="flex justify-between items-center mb-4"></div>
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
                      currentPage === number
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
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
        <Footer />
      </div>
    </div>
  );
};

export default Filter;
