import React from 'react'
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <div className='login-page'>
      <img className='login-background' src="/img/background-login.png" alt="background-login" />
      <div>
        <img className='w-100' src="/img/login-header.png" alt="login-header" />
      </div>

      <div className='login-card'>
        <div className="text-center">
          <img className="img-fluid" width={86} height={86} src='/img/logo.png' alt="logo" />
          <h3>الهيئة العامة للرقابة المالية</h3>
          <h2>تسجيل الدخول</h2>
          <p>أدخل بريدك الإلكتروني وكلمة المرور أدناه</p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  )
}
