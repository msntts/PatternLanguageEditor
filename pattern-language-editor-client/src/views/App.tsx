import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import PatternView from './containers/PatternViewContainer'
import PatternEdit from './containers/PatternEditDialogContainer'
import PatternCreate from './containers/PatternCreateDialogContainer'
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
            <Route path="/edit" element={<PatternEdit />} />
            <Route path="/create" element={<PatternCreate />} />
          </Routes>
        </Router>
      </Box>
    </div>
  )
}

export default App
