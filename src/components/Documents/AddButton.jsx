/* global cozy */

import React from 'react'
import Button from 'cozy-ui/react/Button'
import { Consumer } from 'components/ClientProvider'

class _AddButton extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.create = this.create.bind(this)
    this.state = { v2: false }
  }
  handleChange(ev) {
    this.setState({ v2: ev.target.checked })
  }

  async create() {
    const { client, doctype, attributes, onComplete } = this.props
    const { v2 } = this.state
    let response
    if (v2) {
      response = await client.mutate(client.create(doctype, attributes))
    } else {
      response = await cozy.client.data.create(doctype, attributes)
    }
    if (typeof onComplete === 'function') onComplete(response)
  }

  render() {
    const { doctype, attributes, ...forwardProps } = this.props
    const { v2 } = this.state
    delete forwardProps.onComplete
    return (
      <div>
        Client V2 :{' '}
        <input checked={v2} type="checkbox" onChange={this.handleChange} />
        <br />
        <pre>
          Doctype: {doctype}
          {'\n'}
          Attributes: {JSON.stringify(attributes, null, 2)}
        </pre>
        <Button onClick={this.create} {...forwardProps} />
      </div>
    )
  }
}

const AddButton = props => {
  return (
    <Consumer>{client => <_AddButton client={client} {...props} />}</Consumer>
  )
}

export default AddButton
