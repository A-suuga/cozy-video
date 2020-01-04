import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { IntentOpener } from 'cozy-ui/react'
import { IntentIframe } from 'cozy-ui/react'
import { Intents } from 'cozy-interapp'
// import styles from './AugmentedModal'

// const Videos = () => (
//   <Query query={videosQuery}>
//     {({ data, fetchStatus }) => (
//       <div className="todos">
//         {fetchStatus !== 'loaded' ? (
//           <Spinner size="xxlarge" middle />
//         ) : (
//           <div>
//             <VideosList videos={data} />
//           </div>
//         )}
//       </div>
//     )}
//   </Query>
// )

class Videos extends Component {
  constructor(props, context) {
    super(props, context)

    this.intents = new Intents({ client: this.context.client })
  }

  render() {
    // return (
    //   <Panel.Main className={styles.AugmentedModalIntent}>
    //     <IntentIframe
    //       action="PICK"
    //       type="io.cozy.files"
    //       data={{}}
    //       // data={{ id: '70c36168e7a24b6eee70a4b6460008ac' }}
    //       create={this.intents.create}
    //       onTerminate={doc => {
    //         // alert('intent has completed ! ' + JSON.stringify(doc))
    //         alert('intent has completed ! ' + JSON.stringify(doc))
    //         // eslint-disable-next-line no-console
    //         console.warn('File: ', doc)
    //       }}
    //     />
    //   </Panel.Main>
    // )
    // return (
    //   <IntentOpener
    //     onComplete={file => {
    //       // eslint-disable-next-line no-console
    //       console.warn('Response: ', file)
    //       this.props.router.push(`/watch/${file.id}`)
    //     }}
    //     onDismiss={() => alert('intent has been dismissed !')}
    //     action="PICK"
    //     doctype="io.cozy.files"
    //     options={{ exposeIntentFrameRemoval: false }}
    //     create={this.intents.create}
    //     size={'xlarge'}
    //   >
    //     <button>Open video...</button>
    //   </IntentOpener>
    // )
    return (
      <IntentIframe
        action="PICK"
        create={this.intents.create}
        data={{ exposeIntentFrameRemoval: false }}
        type="io.cozy.files"
        onCancel={() => alert('intent cancelled')}
        onError={error =>
          alert('intent has failed with error: ' + error.message)
        }
        onTerminate={file => this.props.router.push(`/watch/${file.id}`)}
      />
    )
  }
}

Videos.contextTypes = {
  client: PropTypes.object.isRequired,
  store: PropTypes.object
}

export default Videos
