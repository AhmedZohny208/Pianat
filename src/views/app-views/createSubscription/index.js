import React, { lazy, Suspense, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import SidebarItems from './SidebarItems'
import StockFundItem1 from './StockFundItem1'
import StockFundItem2 from './StockFundItem2'
import StockFundItem3 from './StockFundItem3'
import StockFundItem4 from './StockFundItem4'
import StockFundItem5 from './StockFundItem5'

export default function CreateSubscription({ match }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <>
    <SidebarItems isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route path={`${match.url}/stock-fund`} component={lazy(() => import(`./StockFund`))} exact />

        <Route path={`${match.url}/stock-fund/1`} component={() => <StockFundItem1 openSidebar={openSidebar} />} exact />
        <Route path={`${match.url}/stock-fund/2`} component={() => <StockFundItem2 openSidebar={openSidebar} />} exact />
        <Route path={`${match.url}/stock-fund/3`} component={() => <StockFundItem3 openSidebar={openSidebar} />} exact />
        <Route path={`${match.url}/stock-fund/4`} component={() => <StockFundItem4 openSidebar={openSidebar} />} exact />
        <Route path={`${match.url}/stock-fund/5`} component={() => <StockFundItem5 openSidebar={openSidebar} />} exact />

        <Route path={`${match.url}/stock-fund/2`} component={lazy(() => import(`./StockFundItem2`))} exact />
        <Route path={`${match.url}/stock-fund/3`} component={lazy(() => import(`./StockFundItem3`))} exact />
        <Route path={`${match.url}/stock-fund/4`} component={lazy(() => import(`./StockFundItem4`))} exact />
        <Route path={`${match.url}/stock-fund/5`} component={lazy(() => import(`./StockFundItem5`))} exact />
        <Route path={`${match.url}/stock-fund/6`} component={lazy(() => import(`./StockFundItem6`))} exact />
        <Route path={`${match.url}/stock-fund/7`} component={lazy(() => import(`./StockFundItem7`))} exact />
        <Route path={`${match.url}/stock-fund/8`} component={lazy(() => import(`./StockFundItem8`))} exact />
        <Route path={`${match.url}/stock-fund/9`} component={lazy(() => import(`./StockFundItem9`))} exact />
        <Route path={`${match.url}/stock-fund/10`} component={lazy(() => import(`./StockFundItem10`))} exact />
        <Route path={`${match.url}/stock-fund/11`} component={lazy(() => import(`./StockFundItem11`))} exact />
        <Route path={`${match.url}/stock-fund/12`} component={lazy(() => import(`./StockFundItem12`))} exact />
        <Route path={`${match.url}/stock-fund/13`} component={lazy(() => import(`./StockFundItem13`))} exact />
        <Route path={`${match.url}/stock-fund/14`} component={lazy(() => import(`./StockFundItem14`))} exact />
        <Route path={`${match.url}/stock-fund/15`} component={lazy(() => import(`./StockFundItem15`))} exact />
        <Route path={`${match.url}/stock-fund/16`} component={lazy(() => import(`./StockFundItem16`))} exact />
        <Route path={`${match.url}/stock-fund/17`} component={lazy(() => import(`./StockFundItem17`))} exact />
        <Route path={`${match.url}/stock-fund/18`} component={lazy(() => import(`./StockFundItem18`))} exact />
        <Route path={`${match.url}/stock-fund/19`} component={lazy(() => import(`./StockFundItem19`))} exact />
        <Route path={`${match.url}/stock-fund/20`} component={lazy(() => import(`./StockFundItem20`))} exact />
        <Route path={`${match.url}/stock-fund/21`} component={lazy(() => import(`./StockFundItem21`))} exact />
        <Route path={`${match.url}/stock-fund/22`} component={lazy(() => import(`./StockFundItem22`))} exact />
        <Route path={`${match.url}/stock-fund/23`} component={lazy(() => import(`./StockFundItem23`))} exact />
        <Route path={`${match.url}/stock-fund/24`} component={lazy(() => import(`./StockFundItem24`))} exact />
        <Route path={`${match.url}/stock-fund/25`} component={lazy(() => import(`./StockFundItem25`))} exact />
        <Route path={`${match.url}/stock-fund/26`} component={lazy(() => import(`./StockFundItem26`))} exact />
        <Route path={`${match.url}/stock-fund/27`} component={lazy(() => import(`./StockFundItem27`))} exact />
        <Route path={`${match.url}/stock-fund/28`} component={lazy(() => import(`./StockFundItem28`))} exact />
        <Route path={`${match.url}/stock-fund/29`} component={lazy(() => import(`./StockFundItem29`))} exact />
        <Route path={`${match.url}/stock-fund/30`} component={lazy(() => import(`./StockFundItem30`))} exact />
        <Route path={`${match.url}/stock-fund/31`} component={lazy(() => import(`./StockFundItem31`))} exact />
        <Route path={`${match.url}/stock-fund/32`} component={lazy(() => import(`./StockFundItem32`))} exact />
        <Route path={`${match.url}/stock-fund/33`} component={lazy(() => import(`./StockFundItem33`))} exact />
        <Route path={`${match.url}/stock-fund/34`} component={lazy(() => import(`./StockFundItem34`))} exact />
      </Switch>
    </Suspense>
    </>
  )
}