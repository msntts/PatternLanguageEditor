import React from 'react'
import './App.css'
import PatternList from './containers/PatternListContainer'
import PatternView from './containers/PatternViewContainer'

function App() {
  return (
    <div className="App">
      <PatternList />
      <PatternView />
    </div>
  )
}

export default App
