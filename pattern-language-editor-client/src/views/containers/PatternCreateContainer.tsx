import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PatternEdit, { PatternChunks } from '../components/PatternEditComponent'
import { create } from '../../state/patterns'

const PatternCreateContainer = () => {
  const dispatch = useDispatch()

  const onSubmitChanges = useCallback(
    (props: PatternChunks) =>
      dispatch(
        create({
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

  return <PatternEdit {...blankPattern} returnPath="/" onSubmitChanges={onSubmitChanges} />
}

export default PatternCreateContainer
