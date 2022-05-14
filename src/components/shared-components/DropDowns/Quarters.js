import React from 'react'
import { Dropdown, Menu } from 'antd';
import {
  DownOutlined
} from '@ant-design/icons';

const menu = () => {
  return (
    <Menu>
      <Menu.Item className='text-start' key="0">
        <button className='btn'>الربع الأول 2022</button>
      </Menu.Item>
      <Menu.Item className='text-start' key="0">
        <button className='btn'>الربع التانى 2022</button>
      </Menu.Item>
      <Menu.Item className='text-start' key="0">
        <button className='btn'>الربع الثالث 2022</button>
      </Menu.Item>
      <Menu.Item className='text-start' key="0">
        <button className='btn'>الربع الرابع 2022</button>
      </Menu.Item>
    </Menu>
  )
}

export default function Quarters() {
  return (
    <Dropdown className='quarters' overlay={menu} trigger={['click']}>
      <button className="btn under-construction-btn" onClick={e => e.preventDefault()}>الربع الأول 2022 <DownOutlined /></button>
    </Dropdown>
  )
}
