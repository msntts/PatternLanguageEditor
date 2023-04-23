import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PatternEditComponent from '../components/PatternEditComponent'
import { selectedPatternSelector } from '../../state/patterns/selector'

export default function PatternEdit() {
  const prop = useSelector(selectedPatternSelector)
  return (
    <div>
      <PatternEditComponent
        name={prop.name}
        imgPath={prop.imgPath}
        context={prop.context}
        problem={prop.problem}
        fource={prop.fource}
        solution={prop.solution}
        result={prop.result}
      />
      <Link to="/">キャンセル</Link>
    </div>
  )
}
