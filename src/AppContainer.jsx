/* global */

import { I18n } from 'cozy-ui/react'
import MuiCozyTheme from 'cozy-ui/react/MuiCozyTheme'
import React from 'react'
import { CozyProvider } from 'cozy-client'
import { Provider } from 'react-redux'
import { Layout, Main, Content, Sidebar } from 'cozy-ui/react'
import { Router, Route, Redirect } from 'react-router'

import Nav from 'components/Nav'
import Videos from 'components/Videos'
import VideoViewer from 'components/VideoViewer'

const AppContainer = ({ store, lang, history, client }) => {
  return (
    <Provider store={store}>
      <CozyProvider client={client}>
        <I18n lang={lang} dictRequire={lang => require(`locales/${lang}`)}>
          <MuiCozyTheme>
            <Router history={history}>
              <Layout>
                <Sidebar>
                  <Nav />
                </Sidebar>

                <Main>
                  <Content className="app-content">
                    <Route path="/videos" component={Videos} />
                    <Route path="/watch/:manifestId" component={VideoViewer} />
                    <Redirect from="/" to="/videos" />
                    <Redirect from="*" to="/videos" />
                  </Content>
                </Main>
              </Layout>
            </Router>
          </MuiCozyTheme>
        </I18n>
      </CozyProvider>
    </Provider>
  )
}

export default AppContainer
