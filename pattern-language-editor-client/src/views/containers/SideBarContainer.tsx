import React, { useRef } from 'react'
import PatternList from './PatternListContainer'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Button, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const SideBarContainer = () => {
  const boxRef = useRef<HTMLDivElement>()

  return (
    <Box
      ref={boxRef}
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
        component={ReactRouterLink}
        to="/create"
        size="large"
        fullWidth
      >
        <Link color="inherit" underline="none">
          パターンを追加する
        </Link>
      </Button>
      <PatternList />
    </Box>
  )
}

export default SideBarContainer
