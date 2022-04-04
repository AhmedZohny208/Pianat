import React from 'react'
import { Layout, Menu } from 'antd';
import AlertTriangle from './svgs/alertTriangle'
import Grid from './svgs/grid'
import { GrBarChart } from 'react-icons/gr'
import Minus from './svgs/Minus';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../configs/AppConfig';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function SideNav({ collapsed }) {
  return (
    <>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <img src={`${collapsed ? '/img/logo.png' : '/img/brand.png'}`} alt="brand" />
      </div>
      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<Grid />}>الرئيسية</Menu.Item>

        <SubMenu key="sub1" icon={<AlertTriangle className='nav-icon' />} title="المخالفات">
          <Menu.Item icon={<Minus />} key="3">
            مخالفات صناديق الإستثمار
            <Link to={`${APP_PREFIX_PATH}/about`} />
          </Menu.Item>
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

        
    </>
  )
}
