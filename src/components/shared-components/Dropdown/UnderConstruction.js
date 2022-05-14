import React from 'react'
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function UnderConstruction() {

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

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <button className="btn under-construction-btn" onClick={e => e.preventDefault()}>الكل <DownOutlined /></button>
    </Dropdown>
  )
}
