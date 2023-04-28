import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PatternViewComponent from '../components/PatternViewComponent'
import { selectedPatternSelector } from '../../state/patterns/selector'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState) => {
  const selected = selectedPatternSelector(state)

  return {
    id: selected.id,
    name: selected.name,
    imgPath: selected.imgPath,
    context: selected.context,
    problem: selected.problem,
    fource: selected.fource,
    solution: selected.solution,
    result: selected.result,
  }
}

type PatternViewProps = {
  id: number
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

const PatternView = (props: PatternViewProps) => {
  return (
    <div>
      <PatternViewComponent
        id={props.id}
        name={props.name}
        imgPath={props.imgPath}
        context={props.context}
        problem={props.problem}
        fource={props.fource}
        solution={props.solution}
        result={props.result}
      />
      <Link to="/edit">パターンを編集する</Link>
    </div>
  )
}

export default connect(mapStateToProps)(PatternView)
