/* global */
import { Component } from 'react'
import PropTypes from 'prop-types'
import { withClient } from 'cozy-client'

class UserActionRequired extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired,
    client: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  }

  render() {
    return this.props.children
  }
}

export default withClient(UserActionRequired)
