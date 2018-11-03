import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

export default class DownloadLink extends Component {
  constructor(props, context) {
    super(props, context)
    const { client } = context
    if (!context.client) {
      throw new Error(
        'Should be used with client in context (use CozyProvider to set context)'
      )
    }

    this.client = client
    this.state = { dlLink: null }
  }

  componentDidMount() {
    this.dlLink = this.client
      .collection('io.cozy.files')
      .getDownloadLinkById(this.props.fileId)
      .then(resp => {
        this.setState({
          dlLink: resp
        })
      })
  }

  render() {
    if (!this.state.dlLink) {
      return (
        <div>
          <h3>Loading link...</h3>
        </div>
      )
    }
    return (
      <div>
        <h3>Watching Video with dlLink {this.state.dlLink}</h3>
        <Player manifestUri={this.state.dlLink} />
      </div>
    )
  }
}

DownloadLink.contextTypes = {
  client: PropTypes.object,
  store: PropTypes.object
}

DownloadLink.propTypes = {
  fileId: PropTypes.string
}
