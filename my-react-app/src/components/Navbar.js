import React, { useState, useEffect } from 'react';
import "../css/button.css";
import { Button, Modal } from "antd";
import FormModal from "./authen/FormModal";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set logged in state based on token presence
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false); // Update logged in state
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update logged in state to true
    handleCancel(); // Close the modal
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="bg-red-600 p-4 ">
        <div className="mx-36 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src="/laptopicon.svg" className="object h-10 w-10 mr-2" alt="logo" />
            </Link>
          </div>

          {/* Danh mục */}
          <div className="relative group md:hidden">
            <button className="button-1 w-24 h-11 mx-2 ">Danh mục</button>
            {/* Dropdown menu */}
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg w-48">
              <ul className="text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
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

          <div className="flex items-center bg-white rounded h-11 p-1 w-1/2">
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              className="flex-grow outline-none text-gray-600"
            />
          </div>
          <div className="flex items-center space-x-4 text-white">

            <div className="flex items-center">
              <span className="text-xs mr-1">Giỏ hàng</span>
            </div>
            {isLoggedIn ? (
              <Button
                color="danger"
                variant="outline"
                style={{
                  color: "white",
                  backgroundColor: "#B91C1C",
                  borderRadius: 0,
                  padding: 20,
                }}
                onClick={handleLogout}
              >
                Đăng xuất
              </Button>
            ) : (
              <Button
                color="danger"
                variant="outline"
                style={{
                  color: "white",
                  backgroundColor: "#B91C1C",
                  borderRadius: 0,
                  padding: 20,
                }}
                onClick={showModal}
              >
                Đăng nhập
              </Button>
            )}

            <Modal
              footer={null}
              open={isModalOpen}
              onCancel={handleCancel}
            >
              <FormModal handleLoginSuccess={handleLoginSuccess} handleCancel={handleCancel} />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
