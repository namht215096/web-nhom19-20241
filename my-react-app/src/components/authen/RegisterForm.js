import { Button, Form, Input, Alert } from "antd";
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const onFinish = async (values) => {
    console.log("Form Values:", values);

    if (values.password !== values.passwordAgain) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
        username: values.username,
        password: values.password,
        email: values.email,
      });

      if (!response.data.success) {
        setErrorMessage(response.data.message);
      } else {
        // Handle successful registration (e.g., redirect to login page)
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration");
    }
  };

  return (
    <div>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Form
        name="register"
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
          <Input  />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Nhập email!" }]}
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

        <Form.Item
          label="Xác nhận mật khẩu"
          name="passwordAgain"
          rules={[{ required: true, message: "Nhập lại mật khẩu" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;