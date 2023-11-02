import React from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'

import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import IconSprite from 'cozy-ui/transpiled/react/Icon/Sprite'
import Sidebar from './Sidebar'
import Intents from './Intents'


const App = () => 
{
  return (
  <HashRouter>
    <Layout>
      <Sidebar />
      <Main>
        <Content className="app-content">
          <Switch>
            <Route path="/intents" component={Intents} />
            <Redirect from="/" to="/intents" />
            <Redirect from="*" to="/intents" />
          </Switch>
        </Content>
      </Main>
      <IconSprite />
    </Layout>
  </HashRouter>
)}

/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/
export default App
