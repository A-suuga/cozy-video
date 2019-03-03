import React from 'react'
import 'react-hint/css/index.css'
import { Route, Redirect } from 'react-router'

import App from 'components/App'
import Videos from 'components/Videos'
import VideoViewer from 'components/VideoViewer'
import { EnsureIsFirstSynced } from 'ducks/onboarding'

const AppRoute = (
  <Route component={EnsureIsFirstSynced}>
    <Route component={App}>
      <Redirect from="/" to="/videos" />
      <Route path="/videos" component={Videos} />
      <Route path="/watch/:manifestId" component={VideoViewer} />
      <Redirect from="*" to="/videos" />
    </Route>
  </Route>
)

export default AppRoute
