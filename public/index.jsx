/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Assistance from './components/Assistance/Assistance'

navigator.serviceWorker.register('sw.js')

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/assistance" component={Assistance} />
      <Route path="/" component={Login} />
    </Switch>

  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
