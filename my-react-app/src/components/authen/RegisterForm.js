import { Button, Form, Input } from "antd";
import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Nhập tên người dùng",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gmail"
          name="gmail"
          rules={[
            {
              required: true,
              message: "Nhập gmail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Nhập mật khẩu",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Xác nhận mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Nhập lại mật khẩu",
            },
          ]}
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
