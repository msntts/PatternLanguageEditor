import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatternEdit, { PatternChunks } from '../components/PatternEditComponent'
import { selectedPatternSelector, edit } from '../../state/patterns'

const PatternEditContainer = () => {
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

  return <PatternEdit {...selected} returnPath="/" onSubmitChanges={onSubmitChanges} />
}

export default PatternEditContainer
