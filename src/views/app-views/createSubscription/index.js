import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Loading from '../../../components/shared-components/Loading'
import StockFundItem1 from './StockFundItem1.js'

const CreateSubscription = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route
        path={`${match.url}/1`}
        exact
        component={<StockFundItem1 />}
      />
    </Switch>
  </Suspense>
)

export default CreateSubscription