import React from 'react'

import { Button } from 'cozy-ui/react/Button'
import VerboseIntentOpener from './VerboseIntentOpener'

const Accounts = () => (
  <div>
    <h1>Create account</h1>
    <VerboseIntentOpener
      action="CREATE"
      doctype="io.cozy.accounts"
      onComplete={res => alert('intent has completed ! ' + JSON.stringify(res))}
      onDismiss={() => alert('intent has been dismissed !')}
      options={{
        slug: 'trainline'
      }}
    >
      <Button>Create account for Trainline</Button>
    </VerboseIntentOpener>
  </div>
)

export default Accounts
