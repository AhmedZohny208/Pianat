import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from '../../components/shared-components/Loading';
import { APP_PREFIX_PATH } from '../../configs/AppConfig'

export default function AppViews() {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}`} component={lazy(() => import(`./home`))} exact />

        <Route path={`${APP_PREFIX_PATH}/create-subscription`} component={lazy(() => import(`./createSubscription`))} />

        <Route path={`${APP_PREFIX_PATH}/mokhlfat/investment-funds-violations`} component={lazy(() => import(`./mokhalfat/investmentFundsViolations`))} exact />
        <Route path={`${APP_PREFIX_PATH}/mokhlfat/Investment-policy-violations`} component={lazy(() => import(`./mokhalfat/investmentPolicyViolations`))} exact />
        <Route path={`${APP_PREFIX_PATH}/mokhlfat/service-provider-violations`} component={lazy(() => import(`./mokhalfat/serviceProviderViolations`))} exact />

        <Route path={`${APP_PREFIX_PATH}/indicators/market-size`} component={lazy(() => import(`./indications/marketSizeIndicators`))} exact />

        

        {/* <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund`} component={lazy(() => import(`./createSubscription/StockFund`))} exact />

        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/1`} component={lazy(() => import(`./createSubscription/StockFundItem1`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/2`} component={lazy(() => import(`./createSubscription/StockFundItem2`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/3`} component={lazy(() => import(`./createSubscription/StockFundItem3`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/4`} component={lazy(() => import(`./createSubscription/StockFundItem4`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/5`} component={lazy(() => import(`./createSubscription/StockFundItem5`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/6`} component={lazy(() => import(`./createSubscription/StockFundItem6`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/7`} component={lazy(() => import(`./createSubscription/StockFundItem7`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/8`} component={lazy(() => import(`./createSubscription/StockFundItem8`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/9`} component={lazy(() => import(`./createSubscription/StockFundItem9`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/10`} component={lazy(() => import(`./createSubscription/StockFundItem10`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/11`} component={lazy(() => import(`./createSubscription/StockFundItem11`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/12`} component={lazy(() => import(`./createSubscription/StockFundItem12`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/13`} component={lazy(() => import(`./createSubscription/StockFundItem13`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/14`} component={lazy(() => import(`./createSubscription/StockFundItem14`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/15`} component={lazy(() => import(`./createSubscription/StockFundItem15`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/16`} component={lazy(() => import(`./createSubscription/StockFundItem16`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/17`} component={lazy(() => import(`./createSubscription/StockFundItem17`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/18`} component={lazy(() => import(`./createSubscription/StockFundItem18`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/19`} component={lazy(() => import(`./createSubscription/StockFundItem19`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/20`} component={lazy(() => import(`./createSubscription/StockFundItem20`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/21`} component={lazy(() => import(`./createSubscription/StockFundItem21`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/22`} component={lazy(() => import(`./createSubscription/StockFundItem22`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/23`} component={lazy(() => import(`./createSubscription/StockFundItem23`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/24`} component={lazy(() => import(`./createSubscription/StockFundItem24`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/25`} component={lazy(() => import(`./createSubscription/StockFundItem25`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/26`} component={lazy(() => import(`./createSubscription/StockFundItem26`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/27`} component={lazy(() => import(`./createSubscription/StockFundItem27`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/28`} component={lazy(() => import(`./createSubscription/StockFundItem28`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/29`} component={lazy(() => import(`./createSubscription/StockFundItem29`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/30`} component={lazy(() => import(`./createSubscription/StockFundItem30`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/31`} component={lazy(() => import(`./createSubscription/StockFundItem31`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/32`} component={lazy(() => import(`./createSubscription/StockFundItem32`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/33`} component={lazy(() => import(`./createSubscription/StockFundItem33`))} exact />
        <Route path={`${APP_PREFIX_PATH}/create-subscription/stock-fund/34`} component={lazy(() => import(`./createSubscription/StockFundItem34`))} exact /> */}

        {/* <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}`} /> */}
      </Switch>
    </Suspense>
  )
}
