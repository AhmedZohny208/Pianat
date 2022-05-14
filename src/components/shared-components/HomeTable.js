import React, { useState } from 'react'
import { Table, Card, Dropdown, Menu } from 'antd'
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons'
import { ReactComponent as Dots } from './svgs/dots.svg'
import data from '../../views/app-views/home/dataSource'
import confirmedData from '../../views/app-views/home/confirmedData'
import UnderConstructionColumns from '../../views/app-views/home/underConstructionColumns'
import ModifyFundModal from './Modals/allItems/ModifyFundModal'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from '../../configs/AppConfig'
const dropdownArr = ['الكل', 'تحت الانشاء', 'تم الاعتماد']

export default function HomeTable() {
  const history = useHistory()
  const [dropdownVal, setDropdownVal] = useState('تحت الانشاء')
  const [modifyFundVisible, isModifyFundVisible] = useState(false)

  const menu = () => {
    return (
      <Menu className='home-dropdown'>
        {dropdownArr.map((ele, i) => (
          <Menu.Item key={i} className='text-start'>
            <button className='btn' onClick={() => setDropdownVal(ele)}>
              {ele}
            </button>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  const action = () => {
    return (
      <Menu>
        <Menu.Item key={1} className='text-start'>
          <button className='btn' onClick={() => isModifyFundVisible(true)}>
            تعديل
          </button>
        </Menu.Item>
        <Menu.Item key={2} className='text-start'>
          <button className='btn'>حذف</button>
        </Menu.Item>
      </Menu>
    )
  }

  function UnderConstruction() {
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <button
          className='btn under-construction-btn'
          onClick={(e) => e.preventDefault()}
        >
          {dropdownVal} <DownOutlined />
        </button>
      </Dropdown>
    )
  }

  const confirmedColumns = [
    {
      title: 'اسم الصندوق',
      dataIndex: 'fundName',
      key: 'fundName',
      render: (text) => <span className='fs-16'>{text}</span>,
    },
    {
      title: 'شركة الصندوق المالكة',
      dataIndex: 'ownerFundCompany',
      key: 'ownerFundCompany',
      render: (text) => <span className='text-blue-2'>{text}</span>,
    },
    {
      title: 'رقم الصندوق',
      dataIndex: 'fundNumber',
      key: 'fundNumber',
      render: (text) => (
        <span className='fs-12 fw-600 text-blue-2'>{text}</span>
      ),
    },
    {
      title: 'الحالة',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => (
        <div
          className={`text-center fw-bold ${
            record.review === true && 'text-danger'
          }`}
          style={{ fontSize: '12px' }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'إجراءات',
      key: 'action',
      width: 210,
      render: (text, record) => (
        <div className='d-flex'>
          <div className='home-table-action'>
            <button
              className='btn home-table-btn'
              onClick={() =>
                history.push(
                  `${APP_PREFIX_PATH}/create-subscription/stock-fund/review`
                )
              }
            >
              استعراض النشرة <ArrowLeftOutlined className='ms-2' />
            </button>
          </div>
          <Dropdown overlay={action} trigger={['click']}>
            <Dots
              style={{ marginRight: '6px' }}
              className='cursor-pointer'
              onClick={(e) => e.preventDefault()}
            />
          </Dropdown>
        </div>
      ),
    },
  ].filter((item) => !item.hidden)

  return (
    <>
      {dropdownVal === 'تحت الانشاء' ? (
        <Card
          title='نشرات تحت الانشاء'
          extra={<UnderConstruction />}
          bordered={false}
          style={{ marginBottom: '480px' }}
        >
          <Table
            columns={UnderConstructionColumns}
            dataSource={data}
            pagination={false}
          />
        </Card>
      ) : (
        <Card
          title='نشرات تم اعتمادها'
          extra={<UnderConstruction />}
          bordered={false}
          style={{ marginBottom: '480px' }}
        >
          <Table
            columns={confirmedColumns}
            dataSource={confirmedData}
            pagination={false}
          />
        </Card>
      )}

      <ModifyFundModal
        visible={modifyFundVisible}
        onCancel={() => isModifyFundVisible(false)}
      />
    </>
  )
}
