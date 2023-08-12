import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import PatternView from './containers/PatternViewContainer'
import Header from './components/HeaderComponent'
import SideBar from './containers/SideBarContainer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Router>
          <SideBar />
          <Routes>
            <Route path="/" element={<PatternView />} />
          </Routes>
        </Router>
      </Box>
    </div>
  )
}

export default App
