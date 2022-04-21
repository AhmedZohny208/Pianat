import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import InternalController from './internalController'
import InvestmentData from './investmentData'
import PolicyHoldersData from './policyHoldersData'

export default function Disclosures({ match }) {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/policy-holders`} component={PolicyHoldersData} exact />
        <Route path={`${match.url}/investment-data`} component={InvestmentData} exact />
        <Route path={`${match.url}/internal-controller`} component={InternalController} exact />
      </Switch>
    </Suspense>
  )
}
