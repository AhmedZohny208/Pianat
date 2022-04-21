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
        <Route path={`${APP_PREFIX_PATH}/disclosures`} component={lazy(() => import(`./disclosures`))} />

        <Route path={`${APP_PREFIX_PATH}/mokhlfat/investment-funds-violations`} component={lazy(() => import(`./mokhalfat/investmentFundsViolations`))} exact />
        <Route path={`${APP_PREFIX_PATH}/mokhlfat/Investment-policy-violations`} component={lazy(() => import(`./mokhalfat/investmentPolicyViolations`))} exact />
        <Route path={`${APP_PREFIX_PATH}/mokhlfat/service-provider-violations`} component={lazy(() => import(`./mokhalfat/serviceProviderViolations`))} exact />

        <Route path={`${APP_PREFIX_PATH}/indicators/market-size`} component={lazy(() => import(`./indications/marketSizeIndicators`))} exact />

        {/* <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}`} /> */}
      </Switch>
    </Suspense>
  )
}
