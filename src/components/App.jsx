/* global */

import React from 'react'
import { Layout, Main, Content, Sidebar } from 'cozy-ui/react'
import { Route, Redirect } from 'react-router'

import Nav from 'components/Nav'
import Videos from 'components/Videos'
import VideoViewer from 'components/VideoViewer'

const App = (
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
)

export default App
