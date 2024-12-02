import React, { useState, useEffect } from "react";
import "../css/button.css";
import { Button, Modal } from "antd";
import FormModal from "./authen/FormModal";
import { Link } from "react-router-dom";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleCancel();
  };

  return (
    <div className="fixed top-0 w-full z-10  bg-red-600">
      <div className="p-4">
        <div className="lg:mx-36 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/laptopicon.svg"
                className="h-10 w-10 mr-2"
                alt="logo"
              />
            </Link>
          </div>

          {/* Dropdown menu for smaller screens */}
          <div className="relative group md:hidden">
            <button className="button-1 w-24 h-11 mx-2">Danh mục</button>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-48">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                  Laptop
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Laptop Gaming
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Laptop Văn Phòng
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Phụ Kiện
                </li>
              </ul>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center bg-white rounded h-11 p-1 w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="flex-grow outline-none text-gray-600"
            />
          </div>

        
          <div className="flex items-center space-x-4 text-white mt-4 md:mt-0">
            <div className="flex items-center">
              <Link to="/cart">
                <span className="text-xs mr-1">Giỏ hàng</span>
              </Link>
              
            </div>
            {isLoggedIn ? (
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#B91C1C",
                  borderRadius: 0,
                  padding: "8px 16px",
                }}
                onClick={handleLogout}
              >
                Đăng xuất
              </Button>
            ) : (
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#B91C1C",
                  borderRadius: 0,
                  padding: "8px 16px",
                }}
                onClick={showModal}
              >
                Đăng nhập
              </Button>
            )}
          </div>
        </div>
      </div>

      <Modal footer={null} open={isModalOpen} onCancel={handleCancel}>
        <FormModal
          handleLoginSuccess={handleLoginSuccess}
          handleCancel={handleCancel}
        />
      </Modal>
    </div>
  );
}

export default Navbar;
