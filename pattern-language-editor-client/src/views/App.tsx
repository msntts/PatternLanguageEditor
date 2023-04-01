import React from 'react'
import './App.css'
import PatternList from './containers/PatternListContainer'
import PatternComponentContainer from './containers/PatternContainer'

function App() {
  return (
    <div className="App">
      <PatternList />
      <PatternComponentContainer />
    </div>
  )
}

export default App
