import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'

import { Layout } from 'cozy-ui/react'
import Sidebar from './Sidebar'
import Intents from './Intents'

const App = () => (
  <HashRouter>
    <Layout>
      <Sidebar />
      <main className="app-content">
        <Switch>
          <Route path="/intents" component={Intents} />
          <Redirect from="/" to="/intents" />
          <Redirect from="*" to="/intents" />
        </Switch>
      </main>
    </Layout>
  </HashRouter>
)

export default App
