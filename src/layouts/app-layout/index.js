import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import AlertTriangle from '../../components/layout-components/svgs/alertTriangle'
import Grid from '../../components/layout-components/svgs/grid'
import { GrBarChart } from 'react-icons/gr'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { BiSearch, BiBell } from 'react-icons/bi'
import { Avatar } from 'antd'
import Home from '../../views/app-views/home';
import Minus from '../../components/layout-components/svgs/Minus';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function AppLayout() {
  const [collapsed, isCollapsed] = useState(false)

  const toggle = () => isCollapsed(!collapsed)

  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src="/img/brand.png" alt="brand" />
        </div>
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<Grid />}>الرئيسية</Menu.Item>
          <SubMenu key="sub1" icon={<AlertTriangle className='nav-icon' />} title="المخالفات">
            <Menu.Item icon={<Minus />} key="3">مخالفات صناديق الإستثمار</Menu.Item>
            <Menu.Item icon={<Minus />} key="4">مخالفات مقدمى الخدمات</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<GrBarChart />} title="المؤشرات العامة">
            <Menu.Item icon={<Minus />} key="6">مؤشرات حجم السوق</Menu.Item>
            <Menu.Item icon={<Minus />} key="7">مؤشرات حجم التعاملات</Menu.Item>
            <Menu.Item icon={<Minus />} key="8">مؤشرات القطاعات الاستثمارية</Menu.Item>
            <Menu.Item icon={<Minus />} key="9">مؤشرات الانشطة الاستثمارية</Menu.Item>
            <Menu.Item icon={<Minus />} key="10">مؤشرات الادوات الاستثمارية</Menu.Item>
            <Menu.Item icon={<Minus />} key="11">مؤشرات تدفقات رؤوس الاموال</Menu.Item>
            <Menu.Item icon={<Minus />} key="12">مؤشرات نسب السيولة</Menu.Item>
            <Menu.Item icon={<Minus />} key="13">مؤشرات السيولة</Menu.Item>
            <Menu.Item icon={<Minus />} key="14">مؤشرات بين القطاعات و المؤشرات</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          

        <div className="d-flex collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

          <div className='right-side d-flex align-items-center'>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
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

        <Content
          className="site-layout-background"
          style={{
            marginTop: '80px',
            padding: '22px'
          }}
        >
          <Home />
        </Content>
      </Layout>
    </Layout>
  )
}
