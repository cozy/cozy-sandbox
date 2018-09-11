import React from 'react'

import { Button } from 'cozy-ui/react/Button'
import IntentOpener from 'cozy-ui/react/IntentOpener'

class FileIntent extends React.Component {
  constructor() {
    super()
    this.state = { fileId: null }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.setState({ fileId: ev.target.value })
  }

  render() {
    return (
      <div>
        <h1>File intent</h1>
        File id :{' '}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.fileId}
        />
        <br />
        <IntentOpener
          action="OPEN"
          doctype="io.cozy.files"
          options={{ id: this.state.fileId }}
          onComplete={res =>
            alert('intent has completed ! ' + JSON.stringify(res))
          }
          onDismiss={() => alert('intent has been dismissed !')}
        >
          <Button disabled={!this.state.fileId}>Open file</Button>
        </IntentOpener>
      </div>
    )
  }
}

export default FileIntent
