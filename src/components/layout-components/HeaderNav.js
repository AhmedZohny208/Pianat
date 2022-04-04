import React from 'react'
import { Layout, Avatar } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { BiSearch, BiBell } from 'react-icons/bi'

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
          <div className='notification'>
            <BiBell />
            <div className="circle"></div>
          </div>
          <div className="avatar d-flex align-items-center">
            <Avatar 
              alt="avatar"
              src="/img/avatar/Sally.png"
              style={{ width: 48, height: 48 }} 
            />
            <p className='mb-0'>سالي جورج</p>
          </div>
        </div>

      </div>
    </Header>
  )
}
