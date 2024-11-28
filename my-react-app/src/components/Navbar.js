import { useState } from "react";
import "../css/button.css";
import { Button, Modal } from "antd";
import FormModal from "./authen/FormModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="bg-red-600 p-4 ">
        <div className="mx-36 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/laptopicon.svg" className="h-10 mr-2" alt="logo"></img>
          </div>

          {/* Danh mục */}
          <div className="relative group ">
            <button className="button-1 w-24 h-11 mx-2">Danh mục</button>
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
            <div className=" items-center mr-8">
              <span className="text-xs ml-1">Hotline</span>
              <div className="ml-1 text-xs">1900.5301</div>
            </div>

            <div className="flex items-center">
              <span className="text-xs mr-1">Giỏ hàng</span>
            </div>
            <div>
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
            </div>

            <Modal
              footer={null}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <FormModal />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
