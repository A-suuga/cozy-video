import React from 'react'

import Spinner from 'cozy-ui/react/Spinner'
import { Query } from 'cozy-client'

import VideosList from './VideosList'
import { videosQuery } from 'doctypes'

const Videos = () => (
  <Query query={videosQuery}>
    {({ data, fetchStatus }) => (
      <div className="todos">
        {fetchStatus !== 'loaded' ? (
          <Spinner size="xxlarge" middle />
        ) : (
          <div>
            <VideosList videos={data} />
          </div>
        )}
      </div>
    )}
  </Query>
)

export default Videos
