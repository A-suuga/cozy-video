import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import { Layout, Main, Content } from 'cozy-ui/react/Layout'

import Sidebar from './Sidebar'
import Videos from './Videos'
import VideoViewer from './VideoViewer'

const App = () => (
  <HashRouter>
    <Layout>
      <Sidebar />
      <Main>
        <Content className="app-content">
          <Switch>
            <Route path="/videos" component={Videos} />
            <Route path="/watch/:manifestId" component={VideoViewer} />
            <Redirect from="/" to="/videos" />
            <Redirect from="*" to="/videos" />
          </Switch>
        </Content>
      </Main>
    </Layout>
  </HashRouter>
)

/*
  Enable Hot Module Reload using `react-hot-loader` here
  We enable it here since App is the main root component
  No need to use it anywhere else, it sould work for all
  child components
*/
export default hot(module)(App)
