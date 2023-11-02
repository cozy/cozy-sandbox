import React from 'react'

import Button from 'cozy-ui/transpiled/react/Buttons'
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
      closable={false}
    >
      <Button label={'Create account for Trainline'} />
    </VerboseIntentOpener>
  </div>
)

export default Accounts
