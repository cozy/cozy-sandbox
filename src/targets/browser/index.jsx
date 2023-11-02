import 'cozy-ui/transpiled/react/stylesheet.css'
import 'cozy-ui/dist/cozy-ui.utils.min.css'

/* global cozy */

import 'styles'

import React from 'react'
import CozyClient from 'cozy-client'
import { render } from 'react-dom'
import I18n from 'cozy-ui/transpiled/react/providers/I18n'
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'

import { Intents } from 'cozy-interapp'

import { Provider as ClientProvider } from 'components/ClientProvider'

import App from 'components/App'
let appLocale
const renderApp = function(clientV2) {
  render(
    <BreakpointsProvider>
    <I18n
      lang={appLocale}
      dictRequire={appLocale => require(`locales/${appLocale}`)}
    >
      <ClientProvider value={clientV2}>
        <App />
      </ClientProvider>
    </I18n>
    </BreakpointsProvider>,
    document.querySelector('[role=application]')
  )
}

// return a defaultData if the template hasn't been replaced by cozy-stack
const getDataOrDefault = function(toTest, defaultData) {
  const templateRegex = /^\{\{\.[a-zA-Z]*\}\}$/ // {{.Example}}
  return templateRegex.test(toTest) ? defaultData : toTest
}

// initial rendering of the application
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[role=application]')
  const data = root.dataset

  const appIcon = getDataOrDefault(
    data.cozyIconPath,
    require('../vendor/assets/icon.svg')
  )

  const appNamePrefix = getDataOrDefault(
    data.cozyAppNamePrefix || require('../../../manifest.webapp').name_prefix,
    ''
  )

  const appName = getDataOrDefault(
    data.cozyAppName,
    require('../../../manifest.webapp').name
  )

  appLocale = getDataOrDefault(data.cozyLocale, 'en')

  const protocol = window.location ? window.location.protocol : 'https:'

  const url = `${protocol}//${data.cozyDomain}`

  const clientV2 = new CozyClient({
    uri: url,
    token: data.cozyToken
  })
  const intents = new Intents({ client: clientV2 })
  clientV2.intents = intents


  // initialize the bar, common of all applications, it allows
  // platform features like apps navigation without doing anything
  cozy.bar.init({
    appName: appName,
    appNamePrefix: appNamePrefix,
    iconPath: appIcon,
    lang: appLocale,
    replaceTitleOnMobile: true,
    cozyClient: clientV2
  })

  renderApp(clientV2)
})
