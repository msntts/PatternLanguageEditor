import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PatternList from './containers/PatternListContainer'
import PatternView from './containers/PatternViewContainer'
import PatternEdit from './containers/PatternEditContainer'
import PatternCreate from './containers/PatternCreateContainer'
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
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
