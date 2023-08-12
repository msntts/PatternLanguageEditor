import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PatternInputDialog, { PatternChunks } from '../components/PatternInputDialogComponent'
import { create } from '../../state/patterns'

type PatternCreateDialogContainerProps = {
  visible: boolean

  onApply: (sucess: boolean) => void
  onCancel: () => void
}

const PatternCreateDialogContainer = (props: PatternCreateDialogContainerProps) => {
  const dispatch = useDispatch()

  const onSubmitChanges = useCallback(
    (chunks: PatternChunks) => {
      dispatch(
        create({
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

      props.onApply(true /* createの戻り値入れる? */)
    },
    [dispatch]
  )

  const blankPattern = {
    id: -1,
    name: '',
    imgPath: '',
    context: '',
    problem: '',
    fource: '',
    solution: '',
    result: '',
  }

  return (
    <PatternInputDialog
      {...blankPattern}
      visible={props.visible}
      onSubmitChanges={onSubmitChanges}
      onCancel={() => {
        props.onCancel()
      }}
    />
  )
}

export default PatternCreateDialogContainer
