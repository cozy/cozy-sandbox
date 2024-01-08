import React from 'react'

import  Button  from 'cozy-ui/transpiled/react/Buttons'
import VerboseIntentOpener from './VerboseIntentOpener'

const Apps = () => (
  <div>
    <h1>Install app</h1>
    <VerboseIntentOpener
      action="INSTALL"
      doctype="io.cozy.apps"
      onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
      onDismiss={() => alert('intent has been dismissed !')}
      options={{
        slug: 'trainline'
      }}
    >
      <Button label={'Install app Trainline'} />
    </VerboseIntentOpener>
  </div>
)

export default Apps
