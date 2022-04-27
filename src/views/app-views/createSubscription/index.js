import React, { lazy, Suspense, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import SidebarItems from './SidebarItems'
import StockFundItem1 from './StockFundItem1'
import StockFundItem2 from './StockFundItem2'
import StockFundItem3 from './StockFundItem3'
import StockFundItem4 from './StockFundItem4'
import StockFundItem5 from './StockFundItem5'
import StockFundItem6 from './StockFundItem6'
import StockFundItem7 from './StockFundItem7'
import StockFundItem8 from './StockFundItem8'
import StockFundItem9 from './StockFundItem9'
import StockFundItem10 from './StockFundItem10'
import StockFundItem11 from './StockFundItem11'
import StockFundItem12 from './StockFundItem12'
import StockFundItem13 from './StockFundItem13'
import StockFundItem14 from './StockFundItem14'
import StockFundItem15 from './StockFundItem15'
import StockFundItem16 from './StockFundItem16'
import StockFundItem17 from './StockFundItem17'
import StockFundItem18 from './StockFundItem18'
import StockFundItem19 from './StockFundItem19'
import StockFundItem20 from './StockFundItem20'
import StockFundItem21 from './StockFundItem21'
import StockFundItem22 from './StockFundItem22'
import StockFundItem23 from './StockFundItem23'
import StockFundItem24 from './StockFundItem24'
import StockFundItem25 from './StockFundItem25'
import StockFundItem26 from './StockFundItem26'
import StockFundItem27 from './StockFundItem27'
import StockFundItem28 from './StockFundItem28'
import StockFundItem29 from './StockFundItem29'
import StockFundItem30 from './StockFundItem30'
import StockFundItem31 from './StockFundItem31'
import StockFundItem32 from './StockFundItem32'
import StockFundItem33 from './StockFundItem33'
import StockFundItem34 from './StockFundItem34'

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
    
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route path={`${match.url}/stock-fund`} component={lazy(() => import(`./StockFund`))} exact />

        <div>
          <SidebarItems isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} match={match} />

          <Route path={`${match.url}/stock-fund/1`} component={() => <StockFundItem1 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/2`} component={() => <StockFundItem2 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/3`} component={() => <StockFundItem3 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/4`} component={() => <StockFundItem4 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/5`} component={() => <StockFundItem5 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/6`} component={() => <StockFundItem6 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/7`} component={() => <StockFundItem7 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/8`} component={() => <StockFundItem8 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/9`} component={() => <StockFundItem9 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/10`} component={() => <StockFundItem10 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/11`} component={() => <StockFundItem11 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/12`} component={() => <StockFundItem12 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/13`} component={() => <StockFundItem13 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/14`} component={() => <StockFundItem14 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/15`} component={() => <StockFundItem15 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/16`} component={() => <StockFundItem16 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/17`} component={() => <StockFundItem17 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/18`} component={() => <StockFundItem18 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/19`} component={() => <StockFundItem19 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/20`} component={() => <StockFundItem20 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/21`} component={() => <StockFundItem21 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/22`} component={() => <StockFundItem22 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/23`} component={() => <StockFundItem23 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/24`} component={() => <StockFundItem24 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/25`} component={() => <StockFundItem25 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/26`} component={() => <StockFundItem26 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/27`} component={() => <StockFundItem27 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/28`} component={() => <StockFundItem28 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/29`} component={() => <StockFundItem29 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/30`} component={() => <StockFundItem30 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/31`} component={() => <StockFundItem31 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/32`} component={() => <StockFundItem32 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/33`} component={() => <StockFundItem33 openSidebar={openSidebar} />} exact />
          <Route path={`${match.url}/stock-fund/34`} component={() => <StockFundItem34 openSidebar={openSidebar} />} exact />
        </div>
      </Switch>
    </Suspense>
    </>
  )
}