import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PatternList from './containers/PatternListContainer'
import PatternView from './containers/PatternViewContainer'
import PatternEdit from './containers/PatternEditContainer'
import PatternCreate from './containers/PatternCreateContainer'

const App = () => {
  return (
    <div className="App">
      <PatternList />
      <Router>
        <Routes>
          <Route path="/" element={<PatternView />} />
          <Route path="/edit" element={<PatternEdit />} />
          <Route path="/create" element={<PatternCreate />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
