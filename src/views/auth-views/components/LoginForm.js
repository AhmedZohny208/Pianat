import React from 'react'
import { Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

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

      <div className='d-flex justify-content-between'>
        <div class="ant-col ant-form-item-label">
          <label for="login-form_password" class="" title="كلمة المرور">كلمة المرور</label>
        </div>
        <div className="forgot-password">
          <Link to='!#'>هل نسيت كلمة السر؟</Link>
        </div>
      </div>
      <Form.Item 
        name="password"
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