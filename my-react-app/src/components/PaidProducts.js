import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { formatCash } from '../utils/formatCash';
const PaidProducts = () => {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            // Redirect to login page
            return;
        }

        fetch("http://localhost:8080/api/v1/cart/paid", {
            headers: {
                "Authorization": `Bearer ${token}` // Include token in headers
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setDataSource(data.data);
                } else {
                    console.error("Error fetching cart data", data);
                }
            })
            .catch((error) => console.error("Error:", error));
    }, []);


    const columns = [
        {
            title: '#',
            dataIndex: 'img',
            key: 'img',
            render: (_, record) => (
                <img src={record.img} alt="product" style={{ width: 100, height: 100 }} />
            )
        },
        {
          title: 'Sản phẩm',
          dataIndex: 'product_name',
          key: 'product_name',
        },
        {
          title: 'Giá',
          dataIndex: 'price',
          key: 'price',
          render: (_, record) => (
            <div style={{display: 'flex', alignItems: 'center'}}>
                {record.discount > 0 && (
                    <span style={{color: 'red', textDecoration: 'line-through'}}>{formatCash(record.price)}</span>
                )}
                <span style={{color: 'green', marginLeft: 10}}>{formatCash((record.price / 100) * (100 - record.discount))}</span>
            </div>
          )
        },
        {
          title: 'Số lượng',
          dataIndex: 'quantity',
          key: 'quantity',
        },

      ];
      
      
  return (
    <div style={{marginTop: 20, marginBottom: 20}}>
        <h1>Lịch sử mua hàng</h1>
        <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default PaidProducts