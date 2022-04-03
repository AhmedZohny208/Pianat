import React from 'react'
import { Table, Card, Dropdown, Menu } from 'antd';
import {
  ArrowLeftOutlined,
  DownOutlined
} from '@ant-design/icons';
import {ReactComponent as Dots} from '../../../components/layout-components/svgs/dots.svg';
import data from './dataSource'

const menu = () => {
  return (
    <Menu>
      <Menu.Item className='text-start' key="0">
        <button className='btn'>الكل</button>
      </Menu.Item>
      <Menu.Item className='text-start' key="1">
        <button className='btn'>تحت الانشاء</button>
      </Menu.Item>
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
      render: (text, record) => (
        <div className={`text-center fw-bold ${record.review === true && 'text-danger'}`} style={{ fontSize: '12px' }}>{text}</div>
      )
    },
    {
      title: 'الحالة',
      dataIndex: 'review',
      hidden: true,
      key: 'review',
    },
    {
      title: 'إجراءات',
      key: 'action',
      render: (text, record) => (
        <div className='d-flex'>
          <div className='home-table-action'>
            <button className='btn home-table-btn'>مراجعة النشرة <ArrowLeftOutlined className='home-table-btn-icon' /></button>
            <div className={`home-table-btn-review ${record.review === false && 'd-none'}`}></div>
          </div>
          <Dots style={{ marginRight: '6px' }} />
        </div>
      )
    },
  ].filter(item => !item.hidden);

  return (
    <Card title="نشرات تحت الانشاء" extra={<UnderConstruction />} bordered={false} style={{ marginBottom: '480px' }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  )
}
