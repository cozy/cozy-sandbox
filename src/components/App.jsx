import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'

import Sidebar from './Sidebar'
import Apps from './Apps'
import Accounts from './Accounts'

const App = () => (
  <HashRouter>
    <div className="app-wrapper o-layout--2panes">
      <Sidebar />
      <main className="app-content">
        <Switch>
          <Route path="/accounts" component={Accounts} />
          <Route path="/apps" component={Apps} />
          <Redirect from="/" to="/accounts" />
          <Redirect from="*" to="/accounts" />
        </Switch>
      </main>
    </div>
  </HashRouter>
)

export default App
