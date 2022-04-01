import React from 'react'
import { Table } from 'antd';
import {
  ArrowLeftOutlined,
} from '@ant-design/icons';
import data from './dataSource'

export default function HomeTable() {

  const columns = [
    {
      title: 'اسم الصندوق',
      dataIndex: 'fundName',
      key: 'fundName',
      render: text => <span style={{ color: '#002044', fontSize: '16px' }}>{text}</span>
    },
    {
      title: 'شركة الصندوق المالكة',
      dataIndex: 'ownerFundCompany',
      key: 'ownerFundCompany',
    },
    {
      title: 'رقم الصندوق',
      dataIndex: 'fundNumber',
      key: 'fundNumber',
      render: text => <span style={{ fontSize: '12px', fontWeight: '600' }}>{text}</span>
    },
    {
      title: 'تاريخ البدء',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'الحالة',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        <div className='text-center fw-bold' style={{ fontSize: '12px' }}>{text}</div>
      )
    },
    {
      title: 'إجراءات',
      key: 'action',
      render: () => (
        <button className='btn home-table-btn'>مراجعة النشرة <ArrowLeftOutlined className='home-table-btn-icon' /></button>
      )
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
