import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import PolicyHoldersData from './policyHoldersData'
import CreateDisclosure from './policyHoldersData/CreateDisclosure'
import InternalController from './internalController'
import InvestmentData from './investmentData'

export default function Disclosures({ match }) {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/policy-holders`} component={PolicyHoldersData} exact />
        <Route path={`${match.url}/policy-holders/create`} component={CreateDisclosure} exact />

        <Route path={`${match.url}/investment-data`} component={InvestmentData} exact />
        <Route path={`${match.url}/internal-controller`} component={InternalController} exact />
      </Switch>
    </Suspense>
  )
}
