import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shaka from 'shaka-player'

class Player extends Component {
  constructor(props, context) {
    super(props, context)
    // TODO remove 'http:' properly
    this.manifestUri = props.manifestUri.slice(5)
    const { client } = context
    if (!props.manifestUri) {
      throw new Error('Empty Manifest Uri')
    }
    if (!context.client) {
      throw new Error(
        'Should be used with client in context (use CozyProvider to set context)'
      )
    }

    this.client = client
  }

  componentDidMount() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll()
    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.initPlayer()
    }
  }

  initPlayer() {
    const token = this.client.getClient().token
    // TODO Remove 'http://' properly
    const uri = this.client.getClient().uri.slice(7)
    const cozyInfo = {
      domain: uri,
      token: token.token
    }
    this.player = new shaka.Player(cozyInfo, this.video)
    // Listen for error events.
    this.player.addEventListener('error', this.onErrorEvent)

    // Player configuration
    this.player.configure('preferredAudioLanguage', 'en')
    this.player.configure('preferredTextLanguage', 'fr')
    this.player.configure('streaming.alwaysStreamText', true)

    // Try to load a manifest.
    // This is an asynchronous process.
    this.player.load(this.manifestUri).catch(this.onError) // onError is executed if the asynchronous load fails.
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail)
  }

  // onError(error) {
  //   // Log the error.
  //   console.error('Error code', error.code, 'object', error);
  // }

  componentWillUnmount() {
    // unmount stuff
    // kill stream hogging...:)
  }

  render() {
    // Reload player with new manifest
    this.player && this.player.load(this.manifestUri).catch(this.onError)
    // eslint-disable-next-line no-console
    console.warn('Player Manifest: ', this.manifestUri)
    return (
      <video
        ref={c => {
          this.video = c
        }}
        className="vid-player"
        controls
      />
    )
  }
}

Player.contextTypes = {
  client: PropTypes.object,
  store: PropTypes.object
}

Player.propTypes = {
  manifestUri: PropTypes.string
}

export default Player
