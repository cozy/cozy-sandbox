import React from 'react'
import IntentOpener from 'cozy-ui/transpiled/react/deprecated/IntentOpener'
import { Consumer } from './ClientProvider'

class _VerboseIntentOpener extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { client, ...forwardProps } = this.props
    const { action, doctype, options, create } = this.props
    const createAction = create ? create : client.intents.create.bind(client.intents)
    return (
      <div>
        <pre>
          Action: {action}
          {'\n'}
          Doctype: {doctype}
          {'\n'}
          Options: {JSON.stringify(options, null, 2)}
        </pre>
        <IntentOpener create={createAction} {...forwardProps}  />
      </div>
    )
  }
}

const VerboseIntentOpener = props => {
  return (
    <Consumer>
      {client => <_VerboseIntentOpener client={client} {...props} />}
    </Consumer>
  )
}

export default VerboseIntentOpener
