import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PatternList from './containers/PatternListContainer'
import PatternView from './containers/PatternViewContainer'
import PatternEdit from './containers/PatternEditContainer'

function App() {
  return (
    <div className="App">
      <PatternList />
      <Router>
        <Routes>
          <Route path="/" element={<PatternView />} />
        </Routes>
        <Routes>
          <Route path="/edit" element={<PatternEdit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
