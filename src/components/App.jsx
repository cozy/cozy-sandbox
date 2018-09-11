import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'

import Sidebar from './Sidebar'
import Intents from './Intents'

const App = () => (
  <HashRouter>
    <div className="app-wrapper o-layout--2panes">
      <Sidebar />
      <main className="app-content">
        <Switch>
          <Route path="/intents" component={Intents} />
          <Redirect from="/" to="/intents" />
          <Redirect from="*" to="/intents" />
        </Switch>
      </main>
    </div>
  </HashRouter>
)

export default App
