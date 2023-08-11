import React, { useState } from 'react'
import PatternList from './PatternListContainer'
import PatternCreateDialog from './PatternCreateDialogContainer'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const SideBarContainer = () => {
  const [dialogVisible, setDialogVisible] = useState(false)

  const onApplyCreation = (success: boolean) => {
    if (success) {
      setDialogVisible(false)
    } else {
      // TODO: API失敗したら画面になんか出すとか
    }
  }

  const onCancelCreation = () => {
    setDialogVisible(false)
  }

  return (
    <>
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
          size="large"
          fullWidth
          onClick={() => {
            setDialogVisible(true)
          }}
        >
          パターンを追加する
        </Button>
        <PatternList />
      </Box>

      {dialogVisible && (
        <PatternCreateDialog
          visible={dialogVisible}
          onApply={onApplyCreation}
          onCancel={onCancelCreation}
        />
      )}
    </>
  )
}

export default SideBarContainer
