import React from 'react'
import IntentOpener from 'cozy-ui/transpiled/react/deprecated/IntentOpener'
import { useClient } from 'cozy-client'

const VerboseIntentOpener = props => {
    const client = useClient()    
    const { ...forwardProps } = props
    const { action, doctype, options } = props
    return (
      <div>
        <pre>
          Action: {action}
          {'\n'}
          Doctype: {doctype}
          {'\n'}
          Options: {JSON.stringify(options, null, 2)}
        </pre>
        <IntentOpener create={client.intents.create} {...forwardProps}  />
      </div>
    )
  }


export default VerboseIntentOpener
