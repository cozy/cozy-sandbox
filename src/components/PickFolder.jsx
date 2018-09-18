import React from 'react'

import { Button } from 'cozy-ui/react/Button'
import VerboseIntentOpener from './VerboseIntentOpener'

const Apps = () => (
  <div>
    <h1>Folder picker</h1>
    <VerboseIntentOpener
      action="PICK"
      doctype="io.cozy.files"
      onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
      onDismiss={() => alert('intent has been dismissed !')}
      options={{
        hint: null
      }}
      size={'xlarge'}
    >
      <Button>Pick folder</Button>
    </VerboseIntentOpener>
  </div>
)

export default Apps
