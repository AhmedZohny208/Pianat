import React from 'react'
import {
  Layout
} from "antd";
import AppViews from '../../views/app-views';

const { Content } = Layout;

export default function AppLayout() {
  return (
    <Layout>
      <Content>
        <AppViews />
      </Content>
    </Layout>
  )
}
