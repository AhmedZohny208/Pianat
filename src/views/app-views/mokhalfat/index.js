import React, { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import Loading from '../../../components/shared-components/Loading';

export default function Mokhlfat({ match }) {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/investment-funds-violations`} exact component={lazy(() => import(`./investmentFundsViolations`))} />
      </Switch>
    </Suspense>
  )
}

// /home/mokhlfat