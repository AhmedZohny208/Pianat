import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import { APP_PREFIX_PATH } from '../../../configs/AppConfig'

export default function CreateInvestmentData() {
  return (
    <Breadcrumb className='mb-3'>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/mokhlfat`}>التجاوزات</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/mokhlfat/investment-funds-violations`}>
          التجاوزات على مستوى شركات صناديق الاستثمار
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>تجاوزات استثمارية على مستوى الصناديق</Breadcrumb.Item>
    </Breadcrumb>
  )
}
