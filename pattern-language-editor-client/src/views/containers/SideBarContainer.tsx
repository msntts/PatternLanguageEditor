import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PatternList from './PatternListContainer'
import PatternCreateDialog from './PatternCreateDialogContainer'
import PatternEditDialog from './PatternEditDialogContainer'
import { remove } from '../../state/patterns'
import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const SideBarContainer = () => {
  const dispatch = useDispatch()

  const [creationDialogVisible, setCreationDialogVisible] = useState(false)
  const onApplyCreation = (success: boolean) => {
    if (success) {
      setCreationDialogVisible(false)
    } else {
      // TODO: API失敗したら画面になんか出すとか
    }
  }

  const onCancelCreation = () => {
    setCreationDialogVisible(false)
  }

  const [editDialogVisible, setEditDialogVisible] = useState(false)
  const onApplyEdit = (success: boolean) => {
    if (success) {
      setEditDialogVisible(false)
    } else {
      // TODO: API失敗したら画面になんか出すとか
    }
  }

  const onCancelEdit = () => {
    setEditDialogVisible(false)
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
            setCreationDialogVisible(true)
          }}
        >
          パターンを追加する
        </Button>
        <PatternList
          onPatternEditClicked={() => {
            setEditDialogVisible(true)
          }}
          onPatternRemoveClicked={(id: number) => {
            dispatch(remove(id))
          }}
        />
      </Box>

      {creationDialogVisible && (
        <PatternCreateDialog
          visible={creationDialogVisible}
          onApply={onApplyCreation}
          onCancel={onCancelCreation}
        />
      )}

      {editDialogVisible && (
        <PatternEditDialog
          visible={editDialogVisible}
          onApply={onApplyEdit}
          onCancel={onCancelEdit}
        />
      )}
    </>
  )
}

export default SideBarContainer
