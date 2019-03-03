/* global */

import React from 'react'
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import {
  Alerter,
  Layout,
  Main,
  Content,
  Sidebar,
  IconSprite
} from 'cozy-ui/react'
import ErrorBoundary, { Error } from 'components/ErrorBoundary'
import { hasParameter } from 'utils/qs'

import Nav from 'components/Nav'

const ReactHint = ReactHintFactory(React)

const App = props => {
  return (
    <Layout>
      <Sidebar>
        <Nav />
      </Sidebar>

      <Main>
        <Content>
          {hasParameter(props.location.query, 'error') ? (
            <Error />
          ) : (
            <ErrorBoundary>{props.children}</ErrorBoundary>
          )}
        </Content>
      </Main>

      <ReactHint />

      <IconSprite />
      <Alerter />
    </Layout>
  )
}

export default App
