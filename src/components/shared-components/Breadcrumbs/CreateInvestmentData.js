import React from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../../configs/AppConfig';

export default function CreateInvestmentData() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>الافصاحات</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        افصاحات صندوق إستثمار المتوازن - إزدهار
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
