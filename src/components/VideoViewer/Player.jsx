import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shaka from 'shaka-player/dist/shaka-player.ui'
import 'shaka-player/dist/controls.css'

class Player extends Component {
  constructor(props, context) {
    super(props, context)
    // TODO remove 'http:' properly
    this.manifestUri = props.manifestUri.slice(5)
    // TODO remove 'https:' properly
    // this.manifestUri = props.manifestUri.slice(6)
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
    // TODO Remove 'http://' properly
    // const uri = this.client.getClient().uri.slice(8)
    const cozyInfo = {
      domain: uri,
      token: token.token
    }
    let controls
    this.player = new shaka.Player(cozyInfo, this.video)
    this.ui = new shaka.ui.Overlay(this.player, this.container, this.video)
    // Listen for error events.
    this.player.addEventListener('error', this.onPlayerErrorEvent)
    controls = this.ui.getControls()
    controls.addEventListener('error', this.onUIErrorEvent)

    // Player configuration
    // this.player.configure('preferredAudioLanguage', 'en')
    // this.player.configure('preferredTextLanguage', 'fr')
    // this.player.configure('streaming.alwaysStreamText', true)

    // Try to load a manifest.
    // This is an asynchronous process.
    this.player.load(this.manifestUri).catch(this.onPlayerError) // onPlayerError is executed if the asynchronous load fails.
  }

  onPlayerErrorEvent(errorEvent) {
    // Extract the shaka.util.Error object from the event.
    this.onError(errorEvent.detail)
  }

  onPlayerError(error) {
    // Log the error.
    // eslint-disable-next-line no-console
    console.error('Error code', error.code, 'object', error)
  }

  onUIErrorEvent(errorEvent) {
    this.onPlayerError(errorEvent.detail)
  }

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
      <div
        ref={c => {
          this.container = c
        }}
        style={{ maxWidth: 40 + 'em' }}
      >
        <video
          ref={c => {
            this.video = c
          }}
          style={{ width: 100 + '%', height: 100 + '%' }}
        />
      </div>
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
