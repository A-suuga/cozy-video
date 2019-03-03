import React from 'react'
import { Link } from 'react-router'

const VideosList = props => {
  const { videos } = props
  if (!videos || !videos.length) return null
  return (
    <div>
      <h2>Library</h2>
      <ul className="vid-list-table">
        {videos.map(video => (
          <li key={video._id} className="vid-list-row">
            <Link to={`/watch/${video._id}`} className="c-nav-link">
              {video.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideosList
