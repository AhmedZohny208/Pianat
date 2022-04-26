import React from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../../configs/AppConfig';

export default function InternalControllerRecord() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>الافصاحات</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>افصاح المراقب الداخلى</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/disclosures`}>سجلات الافصاح</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        افصاح #1
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
