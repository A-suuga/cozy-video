/* global cozy */

import 'styles'

import React from 'react'
import { loadState, persistState } from 'store/persistedState'
import configureStore from 'store/configureStore'
import { render } from 'react-dom'

import { setupHistory } from 'utils/history'
import { getClient } from 'ducks/client'
import 'cozy-ui/transpiled/react/stylesheet.css'

let store, client, history, lang, root

const initRender = () => {
  const AppContainer = require('./AppContainer').default
  root = render(
    <AppContainer
      store={store}
      client={client}
      lang={lang}
      history={history}
    />,
    document.querySelector('[role=application]', root)
  )
}

const setupApp = async persistedState => {
  const root = document.querySelector('[role=application]')
  const data = root.dataset
  lang = data.cozyLocale || 'en'

  history = setupHistory()
  client = await getClient(persistedState, () => store)
  store = configureStore(client, persistedState)

  persistState(store)

  cozy.bar.init({
    appName: data.cozyAppName,
    iconPath: data.cozyIconPath,
    lang: data.cozyLocale,
    replaceTitleOnMobile: true
  })

  initRender()
}

// initial rendering of the application
document.addEventListener('DOMContentLoaded', () => {
  loadState().then(setupApp)
})

if (module.hot) {
  module.hot.accept('./AppContainer', () => initRender())
}
