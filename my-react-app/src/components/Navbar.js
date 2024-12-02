import React, { useState, useEffect } from "react";
import "../css/button.css";
import { Button, Modal } from "antd";
import FormModal from "./authen/FormModal";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
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
        
          <div className="flex items-center space-x-4 text-white mt-4 md:mt-0">
            <Link to="/filter"> 
              <SearchOutlined />
            </Link>
            <Link to="/cart">
              <div className="flex items-center">
                <span className="text-sm mr-1">Giỏ hàng</span>
              </div>
            </Link>
            {isLoggedIn ? (
              <>
              <Link to="/">
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#B91C1C",
                  borderRadius: 0,
                  padding: "8px 16px",
                }}
              >
                  Profile
                </Button>
              </Link>

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
              </>
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
