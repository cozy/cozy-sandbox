import React from 'react'
import IntentOpener from 'cozy-ui/react/IntentOpener'

const IntentOpenerWithSummary = props => {
  const { action, doctype, options } = props
  return (
    <div>
      <pre>
        Action: { action }{'\n'}
        Doctype: { doctype }{'\n'}
        Options: { JSON.stringify(options, null, 2) }
      </pre>
      <IntentOpener {...props} />
    </div>
  )
}

export default IntentOpenerWithSummary
