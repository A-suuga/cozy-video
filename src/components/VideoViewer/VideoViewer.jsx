import React, { Component } from 'react'

class VideoViewer extends Component {
  render() {
    return (
      <div>
        <h3>Watching Video {this.props.match.params.manifestId} ...</h3>
      </div>
    )
  }
}

export default VideoViewer
