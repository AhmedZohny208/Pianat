import React from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../../configs/AppConfig';

export default function InvestmentDataRecords() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>الافصاحات</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>افصاحات صندوق إستثمار المتوازن - إزدهار</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>سجلات افصاح بيانات الاستثمار</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
