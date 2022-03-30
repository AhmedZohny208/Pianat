import React from 'react'
import {
  Layout
} from "antd";
import AppViews from '../../views/app-views';
import Navbar from '../../components/layout-components/Navbar';
import Sidebar from '../../components/layout-components/Sidebar';



const { Content } = Layout;

export default function AppLayout() {
  return (
    <Layout>
      <Navbar />
      <Sidebar />
      <Content>
        <AppViews />
      </Content>
    </Layout>
  )
}
