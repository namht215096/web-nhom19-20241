import React from 'react'
import { Input, Tabs } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const FormModal = () => {
  const items = [
    {
      key: '1',
      label: `Đăng Nhập`,
      children: <LoginForm/>,
    },
    {
      key: '2',
      label: `Đăng Ký`,
      children: <RegisterForm/>,
    }
  ]
  return (
    <div>
        <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}

export default FormModal