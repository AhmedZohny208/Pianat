import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import AuthLayout from '../layouts/auth-layout';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from '../configs/AppConfig'

export default function View(props) {

  console.log(props)

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={APP_PREFIX_PATH} />
      </Route>
      <Route path={AUTH_PREFIX_PATH}>
        <AuthLayout />
      </Route>
      <Route path={APP_PREFIX_PATH}>
        <AppLayout />
      </Route>
      <Route path='*'>
        <Redirect to={`${AUTH_PREFIX_PATH}/not-found`} />
      </Route>
    </Switch>
  )
}
