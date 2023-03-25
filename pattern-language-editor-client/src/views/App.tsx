import React from 'react'
import './App.css'
import PatternTab from './containers/PatternTable'
import PatternComponentContainer from './containers/PatternContainer'

function App() {
  return (
    <div className="App">
      <PatternTab />
      <PatternComponentContainer />
    </div>
  )
}

export default App
