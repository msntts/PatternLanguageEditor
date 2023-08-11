import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatternInputDialog, { PatternChunks } from '../components/PatternInputDialogComponent'
import { selectedPatternSelector, edit } from '../../state/patterns'

type PatternEditDialogContainerProps = {
  visible: boolean

  onApply: (sucess: boolean) => void
  onCancel: () => void
}

const PatternEditDialogContainer = (props: PatternEditDialogContainerProps) => {
  const selected = useSelector(selectedPatternSelector)
  const dispatch = useDispatch()

  const onSubmitChanges = useCallback(
    (chunks: PatternChunks) => {
      dispatch(
        edit({
          id: chunks.id,
          name: chunks.name,
          imgPath: chunks.imgPath,
          context: chunks.context,
          problem: chunks.problem,
          fource: chunks.fource,
          solution: chunks.solution,
          result: chunks.result,
        })
      )
    },
    [dispatch]
  )

  return (
    <PatternInputDialog
      {...selected}
      visible={props.visible}
      onSubmitChanges={onSubmitChanges}
      onCancel={() => {
        props.onCancel()
      }}
    />
  )
}

export default PatternEditDialogContainer
