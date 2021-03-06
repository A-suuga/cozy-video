import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Spinner from 'cozy-ui/react/Spinner'

import Player from './Player'

class VideoViewer extends Component {
  constructor(props, context) {
    super(props, context)
    const { client } = context
    if (!context.client) {
      throw new Error(
        'Should be used with client in context (use CozyProvider to set context)'
      )
    }
    this.client = client
    this.manifestId = props.match.params.manifestId
    this.state = { videoName: null, manifestLink: null }
  }

  componentDidMount() {
    // Get the name of the manifest as the name of the video
    this.videoName = this.client
      .collection('io.cozy.files')
      .statById(this.manifestId)
      .then(resp => {
        this.setState({
          videoName: resp.data.name
        })
      })

    // Get the download link of the manifest
    this.manifestLink = this.client
      .collection('io.cozy.files')
      .getDownloadLinkById(this.manifestId)
      .then(resp => {
        this.setState({
          manifestLink: resp
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.videoName !== null && this.state.manifestLink !== null ? (
          <div>
            <h2>{this.state.videoName}</h2>
            <Player manifestUri={this.state.manifestLink} />
          </div>
        ) : (
          <Spinner size="xxlarge" middle />
        )}
      </div>
    )
  }
}

VideoViewer.contextTypes = {
  client: PropTypes.object,
  store: PropTypes.object
}

VideoViewer.propTypes = {
  match: PropTypes.object
}

export default VideoViewer
