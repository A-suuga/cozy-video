import React from 'react'
import DownloadLink from './DownloadLink'
// import { Query } from 'cozy-client'

// export const VideoViewer = () => {
//   const query = client =>
//     client
//       .collection('io.cozy.files')
//       .getDownloadLinkById('57064943d15f2a69385dfee00000a878')
//   return (
//     <Query query={query}>
//       {({ fetchStatus }) => (
//         <div>
//           {fetchStatus !== 'loaded' ? (
//             <h1>Fetching manifest uri...</h1>
//           ) : (
//             <h3>Watching Video with fileId ...</h3>
//           )}
//         </div>
//       )}
//     </Query>
//   )
//

export const VideoViewer = ({ match }) => {
  return <DownloadLink fileId={match.params.manifestId} />
}

export default VideoViewer
