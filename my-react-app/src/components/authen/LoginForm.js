import { Button, Form, Input, Alert } from "antd";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onLoginSuccess }) => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const onFinish = async (values) => {
    console.log("Form Values:", values); // Log values to ensure they are captured correctly

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", {
        username: values.username,
        password: values.password,
      });

      if (response.data.success) {
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);

        onLoginSuccess(); // Call the function to close the modal
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage("An error occurred during login");
    }
  };

  return (
    <div>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Form
        form={form}
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Nhập tên người dùng" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Nhập mật khẩu" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;