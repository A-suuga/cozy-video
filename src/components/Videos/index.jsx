import React from 'react'

// import Spinner from 'cozy-ui/react/Spinner'
// import { queryConnect } from 'cozy-client'
import { Query } from 'cozy-client'
// import { videosQuery } from 'doctypes'

import VideosList from './VideosList'

const query = client =>
  client.find('io.cozy.files').where({ mime: 'application/dash+xml' })

export const Videos = () => (
  <Query query={query}>
    {({ data, fetchStatus }) => (
      <div className="todos">
        {fetchStatus !== 'loaded' ? (
          <h1>Loading...</h1>
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
