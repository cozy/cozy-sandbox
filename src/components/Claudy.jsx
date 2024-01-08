import React from 'react'

import VerboseIntentOpener from './VerboseIntentOpener'
import Button from 'cozy-ui/transpiled/react/Buttons'

class ClaudyIntent extends React.Component {
  render() {
    return (
      <div>
        <h1>Open Claudy</h1>
        <VerboseIntentOpener
          action="CLAUDY"
          doctype="io.cozy.settings"
          options={{}}
          onComplete={res =>
            alert('intent has completed ! ' + JSON.stringify(res))
          }
          onDismiss={() => alert('intent has been dismissed !')}
        >
          <Button label={'Open Claudy'} />
        </VerboseIntentOpener>
      </div>
    )
  }
}

export default ClaudyIntent
