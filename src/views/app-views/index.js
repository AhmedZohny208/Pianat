import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Loading from '../../components/shared-components/Loading';
import { APP_PREFIX_PATH } from '../../configs/AppConfig'

export default function AppViews() {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}`} component={lazy(() => import(`./home`))} exact />

        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}`} />
      </Switch>
    </Suspense>
  )
}
