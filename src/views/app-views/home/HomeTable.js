import React from 'react'
import { Table, Card, Dropdown, Menu } from 'antd';
import {
  ArrowLeftOutlined,
  DownOutlined
} from '@ant-design/icons';
import data from './dataSource'

const menu = () => {
  return (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>

  )
}

function UnderConstruction() {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <button className="btn under-construction-btn" onClick={e => e.preventDefault()}>تحت الانشاء <DownOutlined /></button>
    </Dropdown>
  )
}

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
    <Card title="نشرات تحت الانشاء" extra={<UnderConstruction />} bordered={false} style={{ marginBottom: '480px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  )
}
