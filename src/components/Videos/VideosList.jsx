import React from 'react'
import { Link } from 'react-router-dom'

export const VideosList = props => {
  const { videos } = props
  if (!videos || !videos.length) return null
  return (
    <div>
      <h2>Videos list:</h2>
      <ul className="todos-list">
        {videos.map(video => (
          <li key={video._id} className="todo-item">
            <span>{video.name}</span>
            <Link to={`/watch/${video._id}`}>Watch</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideosList
