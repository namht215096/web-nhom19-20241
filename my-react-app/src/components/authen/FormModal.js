import React from 'react'
import { Input, Tabs } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const FormModal = ({ handleLoginSuccess, handleCancel }) => {
  const items = [
    {
      key: '1',
      label: `Đăng Nhập`,
      children: <LoginForm onLoginSuccess={handleLoginSuccess} />,
    },
    {
      key: '2',
      label: `Đăng Ký`,
      children: <RegisterForm />,
    }
  ]
  return (
    <div>
        <Tabs defaultActiveKey="1" items={items} />
    </div>
  )
}

export default FormModal