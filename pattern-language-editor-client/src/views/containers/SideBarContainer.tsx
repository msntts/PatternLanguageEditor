import React from 'react'
import PatternList from './PatternListContainer'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const SideBarContainer = () => {
  return (
    <Box
      sx={{
        margin: '8px',
        minWidth: '400px',
        maxWidth: '400px',
      }}
    >
      <Button
        color="info"
        variant="contained"
        startIcon={<AddIcon />}
        component={Link}
        to="/create"
        size="large"
        fullWidth
      >
        パターンを追加する
      </Button>
      <PatternList />
    </Box>
  )
}

export default SideBarContainer
