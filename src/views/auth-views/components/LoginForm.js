import React from 'react'
import { Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  let history = useHistory();
  
  return (
    <Form 
      layout="vertical" 
      name="login-form"
    >
      <Form.Item 
        label="البريد الإلكتروني" 
        name="email"
      >
        <Input placeholder='أدخل بريدك الإلكتروني' className="text-input"/>
      </Form.Item>
      <Form.Item 
        name="password"
        label="كلمة المرور" 
        className='password-form-item'
      >
        <Input.Password className='password-input' placeholder='أدخل كلمة المرور' iconRender={visible => (visible ? <EyeTwoTone className='eye-icon' /> : <EyeInvisibleOutlined className='eye-icon' />)} />
      </Form.Item>

      <Form.Item>
        <button 
          className='btn submit-btn' 
          htmlType="submit" 
          onClick={() => history.push('/')}
        >
          تسجيل دخول
        </button>
      </Form.Item>
    </Form>
  )
}