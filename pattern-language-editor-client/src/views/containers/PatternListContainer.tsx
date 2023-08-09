import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patternsSelector, select } from '../../state/patterns'
import { List, ListItemButton, ListItemText } from '@mui/material'

const PatternListContainer = () => {
  const patterns = useSelector(patternsSelector)
  const dispatch = useDispatch()

  const onPatternSelected = useCallback(
    (id: number) => {
      dispatch(select(id))
    },
    [dispatch]
  )

  return (
    <List>
      {patterns.map((pattern) => (
        <ListItemButton key={pattern.name} onClick={() => onPatternSelected(pattern.id)}>
          <ListItemText sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            #{pattern.id} {pattern.name}
          </ListItemText>
        </ListItemButton>
      ))}
    </List>
  )
}

export default PatternListContainer
