import React, { useCallback, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patternsSelector, select } from '../../state/patterns'
import { List, ListItemButton, Box, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

type PatternListContainerProps = {
  onPatternRemoveClicked: (id: number) => void
  onPatternEditClicked: () => void
}

const PatternListContainer = (props: PatternListContainerProps) => {
  const patterns = useSelector(patternsSelector)
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>()
  const [boxWidth, setBoxWidth] = useState<number | undefined>()
  const dispatch = useDispatch()
  const buttonBoxRef = useRef<HTMLDivElement>()

  const onPatternSelected = useCallback(
    (id: number) => {
      dispatch(select(id))
    },
    [dispatch]
  )

  useEffect(() => {
    // buttonBoxRefでIconButtonを格納しているboxのサイズを取得→Typographyの表示サイズ変更に利用
    // この時、ListItemButtonを削除するとbuttonBoxRefの参照がなくなってしまうので、
    // boxのサイズが取得できているときにstateにキャッシュしておく
    if (selectedIndex !== undefined && buttonBoxRef.current !== undefined) {
      setBoxWidth(buttonBoxRef.current?.clientWidth)
    }
  }, [selectedIndex])

  // 選択したListItemにIconButtonを表示するため、Typographyの表示領域を調節する
  const adjustMargin = (myIndex: number) => {
    if (selectedIndex === myIndex) {
      return { marginRight: boxWidth }
    }
  }

  return (
    <List>
      {patterns.map((pattern, index) => (
        <ListItemButton
          key={pattern.id}
          onClick={() => {
            onPatternSelected(pattern.id)
            setSelectedIndex(index)
          }}
        >
          <Typography
            sx={{
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marginRight: { ...adjustMargin(index) },
            }}
          >
            #{pattern.id} {pattern.name}
          </Typography>
          {selectedIndex === index && (
            <Box
              ref={buttonBoxRef}
              top="50%"
              right={0}
              position="absolute"
              sx={{ transform: 'translateY(-50%)' }}
            >
              <IconButton
                onClick={() => {
                  props.onPatternEditClicked()
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  props.onPatternRemoveClicked(pattern.id)
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </ListItemButton>
      ))}
    </List>
  )
}

export default PatternListContainer
