import React from 'react'

import { Button } from 'cozy-ui/react/Button'
import IntentOpener from 'cozy-ui/react/IntentOpener'

const Apps = () => (
  <div>
    <h1>Apps</h1>
    <IntentOpener
      action="INSTALL"
      doctype="io.cozy.apps"
      onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
      onDismiss={() => alert('intent has been dismissed !')}
      options={{
        slug: 'trainline'
      }}
    >
      <Button>Install app Trainline</Button>
    </IntentOpener>
  </div>
)

export default Apps
