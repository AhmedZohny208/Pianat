import React from 'react'
import { Layout, Menu } from 'antd';
import AlertTriangle from '../shared-components/svgs/alertTriangle'
import Grid from '../shared-components/svgs/grid'
import { GrBarChart } from 'react-icons/gr'
import Minus from '../shared-components/svgs/Minus';
import {ReactComponent as Spider} from '../shared-components/svgs/spider.svg';
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
        <Menu.Item key="1" icon={<Grid />}>
          الرئيسية
          <Link to={`${APP_PREFIX_PATH}`} />
          </Menu.Item>

        <SubMenu key="sub1" icon={<AlertTriangle className='nav-icon' />} title="المخالفات">
          <Menu.Item icon={<Minus />} key="3">
            مخالفات صناديق الإستثمار
            <Link to={`${APP_PREFIX_PATH}/mokhlfat/investment-funds-violations`} />
          </Menu.Item>
          {/* <Menu.Item icon={<Minus />} key="15">
            مخالفات السياسات الاستثمارية على مستوى الصناديق
            <Link to={`${APP_PREFIX_PATH}/mokhlfat/Investment-policy-violations`} />
          </Menu.Item> */}
          <Menu.Item icon={<Minus />} key="4">
            مخالفات مقدمى الخدمات
              <Link to={`${APP_PREFIX_PATH}/mokhlfat/service-provider-violations`} />
            </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<GrBarChart />} title="المؤشرات العامة">
          <Menu.Item icon={<Minus />} key="6">
            مؤشرات حجم السوق
            <Link to={`${APP_PREFIX_PATH}/indicators/market-size`} />
            </Menu.Item>
          <Menu.Item icon={<Minus />} key="7">مؤشرات حجم التعاملات</Menu.Item>
          <Menu.Item icon={<Minus />} key="8">مؤشرات القطاعات الاستثمارية</Menu.Item>
          <Menu.Item icon={<Minus />} key="9">مؤشرات الانشطة الاستثمارية</Menu.Item>
          <Menu.Item icon={<Minus />} key="10">مؤشرات الادوات الاستثمارية</Menu.Item>
          <Menu.Item icon={<Minus />} key="11">مؤشرات تدفقات رؤوس الاموال</Menu.Item>
          <Menu.Item icon={<Minus />} key="12">مؤشرات نسب السيولة</Menu.Item>
          <Menu.Item icon={<Minus />} key="13">مؤشرات السيولة</Menu.Item>
          <Menu.Item icon={<Minus />} key="14">مؤشرات بين القطاعات و المؤشرات</Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" icon={<Spider />} title="افصاحات">
          <Menu.Item icon={<Minus />} key="15">
            افصاح بيانات حملة الوثائق
            <Link to={`${APP_PREFIX_PATH}/disclosures/policy-holders`} />
          </Menu.Item>
          <Menu.Item icon={<Minus />} key="16">
            افصاح بيانات الاستثمار
            <Link to={`${APP_PREFIX_PATH}/disclosures/investment-data`} />
          </Menu.Item>
          <Menu.Item icon={<Minus />} key="17">
            عرض افصاحات المراقب الداخلي
            <Link to={`${APP_PREFIX_PATH}/disclosures/internal-controller`} />
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
        
    </>
  )
}
