import React, { useState, useEffect } from "react";
import "../css/button.css";
import { Button, Modal } from "antd";
import FormModal from "./authen/FormModal";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import AlertMess from "./AlertMess";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleCartClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      navigate("/cart");
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    handleCancel();
  };

  return (
    <div className="fixed top-0 w-full z-10  bg-red-600">
      <div className="p-4">
        <div className="lg:mx-20 flex flex-wrap items-center justify-between">
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
            <div className="flex items-center" onClick={handleCartClick}>
              <span className="text-sm mr-1">Giỏ hàng</span>
            </div>
            {isLoggedIn ? (
              <>
              <Link to="/profile">
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

      {showAlert && <AlertMess message="Please log in to view your cart." />}
    </div>
  );
}

export default Navbar;
