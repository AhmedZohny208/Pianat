import React from 'react'
import { Table } from 'antd';
import data from './dataSource'

export default function HomeTable() {

  const columns = [
    {
      title: 'اسم الصندوق',
      dataIndex: 'fundName',
      key: 'fundName'
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
    },
    {
      title: 'إجراءات',
      key: 'action',
    },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
