import React from 'react'
import IntentOpener from 'cozy-ui/react/IntentOpener'
import { Consumer } from './ClientProvider'

class _VerboseIntentOpener extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = { v2: false }
  }
  handleChange(ev) {
    this.setState({ v2: ev.target.value })
  }

  render() {
    const { client, ...forwardProps } = this.props
    const { action, doctype, options } = this.props
    const { v2 } = this.state
    const create = v2 ? client.intents.create.bind(client.intents) : undefined
    return (
      <div>
        Client V2 :{' '}
        <input value={v2} type="checkbox" onChange={this.handleChange} />
        <br />
        <pre>
          Action: {action}
          {'\n'}
          Doctype: {doctype}
          {'\n'}
          Options: {JSON.stringify(options, null, 2)}
        </pre>
        <IntentOpener create={create} {...forwardProps} />
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
