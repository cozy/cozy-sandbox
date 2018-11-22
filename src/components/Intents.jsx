import Apps from './Apps'
import Accounts from './Accounts'
import FileIntent from './FileIntent'
import Claudy from './Claudy'
import PickFolder from './PickFolder'
import Custom from './Custom'
import React from 'react'

const styles = {
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))'
  }
}

const Intents = () => {
  return (
    <div style={styles.grid}>
      <Accounts />
      <Apps />
      <FileIntent />
      <Claudy />
      <PickFolder />
      <Custom />
    </div>
  )
}

export default Intents
