import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import PolicyHoldersData from './policyHoldersData'
import CreateDisclosure from './policyHoldersData/CreateDisclosure'
import Records from './policyHoldersData/Records'
import SingleDisclosure from './policyHoldersData/SingleDisclosure'

import InvestmentData from './investmentData'
import CreateInvestmentDisclosure from './investmentData/CreateInvestmentDisclosure'
import InvestmentDataRecords from './investmentData/InvestmentDataRecords'

import InternalController from './internalController'

export default function Disclosures({ match }) {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/policy-holders`} component={PolicyHoldersData} exact />
        <Route path={`${match.url}/policy-holders/create`} component={CreateDisclosure} exact />
        <Route path={`${match.url}/policy-holders/records`} component={Records} exact />
        <Route path={`${match.url}/policy-holders/records/1`} component={SingleDisclosure} exact />

        <Route path={`${match.url}/investment-data`} component={InvestmentData} exact />
        <Route path={`${match.url}/investment-data/create`} component={CreateInvestmentDisclosure} exact />
        <Route path={`${match.url}/investment-data/records`} component={InvestmentDataRecords} exact />
        <Route path={`${match.url}/internal-controller`} component={InternalController} exact />
      </Switch>
    </Suspense>
  )
}
