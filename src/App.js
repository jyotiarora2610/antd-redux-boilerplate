import React from 'react'

import './App.css'

const App = props => (
  <div>
    <div {...props} />
    {/* <Text>{JSON.stringify(props.history)}</Text> */}
  </div>
)

export default App
