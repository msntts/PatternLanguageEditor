import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { patternsSelector, select } from '../../state/patterns'
import { useCallback } from 'react'

const PatternListContainer = () => {
  const patterns = useSelector(patternsSelector)
  const dispatch = useDispatch()

  const onPatternSelected = useCallback((id: number) => dispatch(select(id)), [dispatch])

  return (
    <ul>
      {patterns.map((pattern) => (
        <li key={pattern.name} id={pattern.name} onClick={() => onPatternSelected(pattern.id)}>
          #{pattern.id} {pattern.name}
        </li>
      ))}
    </ul>
  )
}

export default PatternListContainer
