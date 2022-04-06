import React from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../../configs/AppConfig';

export default function CreateSubscription() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}`}>الرئيسية</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        انشاء نشرة اكتتاب
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
