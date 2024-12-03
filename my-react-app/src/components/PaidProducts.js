import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { formatCash } from "../utils/formatCash";
import { useNavigate } from "react-router-dom";
const PaidProducts = () => {
  const [dataSource, setDataSource] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page
      return;
    }

    fetch("http://localhost:8080/api/v1/cart/paid", {
      headers: {
        Authorization: `Bearer ${token}`, // Include token in headers
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setDataSource(data.data);
          console.log(data.data);
        } else {
          console.error("Error fetching cart data", data);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "img",
      key: "img",
      render: (_, record) => (
        <img
          src={record.img}
          alt="product"
          style={{ width: 100, height: 100 }}
        />
      ),
    },
    {
      title: "Sản phẩm",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {record.discount > 0 && (
            <span style={{ color: "red", textDecoration: "line-through" }}>
              {formatCash(record.price)}
            </span>
          )}
          <span style={{ color: "green", marginLeft: 10 }}>
            {formatCash((record.price / 100) * (100 - record.discount))}
          </span>
        </div>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  const handleRowClick = (record) => {
    navigate(`/productdetail/${record.product_id}`);
  };

  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <h1 className="text-2xl font-bold mb-4">Lịch sử mua hàng</h1>

      <div className="flex justify-center items-center gap-4 mb-4">
        <h1 className="text-xl font-bold text-red-500">
          Tổng chi tiêu:{" "}
          {formatCash(
            dataSource.reduce(
              (acc, curr) =>
                acc +
                (curr.price / 100) * (100 - curr.discount) * curr.quantity,
              0
            )
          )}
        </h1>
        <h1 className="text-xl font-bold text-green-500">Tiết kiệm: {formatCash(dataSource.reduce((acc, curr) => acc + (curr.price - (curr.price / 100) * (100 - curr.discount)) * curr.quantity, 0))}</h1>

      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        onRow={(record) => ({
          onClick: () => handleRowClick(record), // Navigate on row click
        })}
        rowKey={(record) => `${record.cart_item_id}`} // Ensure unique keys
        pagination={{ pageSize: 5 }} // Set the number of rows per page
      />
    </div>
  );
};

export default PaidProducts;
