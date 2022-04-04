import React from 'react'
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { BiSearch } from 'react-icons/bi'
import NavProfile from './NavProfile';
import NavNotification from './NavNotification';

const { Header } = Layout;

export default function HeaderNav({ collapsed, toggle }) {
  return (
    <Header className={`site-layout-background ${collapsed ? 'collapsed' : ''}`} style={{ padding: 0 }}>
      <div className="d-flex collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

        <div className='right-side d-flex align-items-center'>
          {React.createElement(collapsed ? MenuFoldOutlined : MenuUnfoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
          <form className="search d-flex position-relative">
            <input className="form-control me-2" type="search" placeholder="بحث" aria-label="Search" />
            <button className="btn position-absolute" type="submit">
              <BiSearch />
            </button>
          </form>
        </div>

        <div className='left-side d-flex align-items-center'>
          <NavNotification />
          <NavProfile />
        </div>

      </div>
    </Header>
  )
}
