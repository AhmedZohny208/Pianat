import React, { useState } from 'react'
import { Layout } from 'antd';
import HeaderNav from '../../components/layout-components/HeaderNav';
import SideNav from '../../components/layout-components/SideNav';
import AppViews from '../../views/app-views';

const { Content } = Layout;

export default function AppLayout() {
  const [collapsed, isCollapsed] = useState(false)

  const toggle = () => isCollapsed(!collapsed)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNav collapsed={collapsed} />
      <Layout>
        <HeaderNav collapsed={collapsed} toggle={toggle} />
        <Content
          className="site-layout-background"
          style={{
            marginTop: '80px',
            padding: '22px'
          }}
        >
          <AppViews />
        </Content>
      </Layout>
    </Layout>
  )
}
