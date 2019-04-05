import React from 'react'
import Add from './Add'

const styles = {
  grid: {
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))'
  }
}

const Documents = () => {
  return (
    <div style={styles.grid}>
      <Add />
    </div>
  )
}

export default Documents
