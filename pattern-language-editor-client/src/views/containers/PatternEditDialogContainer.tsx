import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatternInputDialog, { PatternChunks } from '../components/PatternInputDialogComponent'
import { selectedPatternSelector, edit } from '../../state/patterns'

const PatternEditDialogContainer = () => {
  const selected = useSelector(selectedPatternSelector)
  const dispatch = useDispatch()

  const onSubmitChanges = useCallback(
    (props: PatternChunks) =>
      dispatch(
        edit({
          id: props.id,
          name: props.name,
          imgPath: props.imgPath,
          context: props.context,
          problem: props.problem,
          fource: props.fource,
          solution: props.solution,
          result: props.result,
        })
      ),
    [dispatch]
  )

  return <PatternInputDialog {...selected} returnPath="/" onSubmitChanges={onSubmitChanges} />
}

export default PatternEditDialogContainer
