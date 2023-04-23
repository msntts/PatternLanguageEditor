import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PatternViewComponent from '../components/PatternViewComponent'
import { selectedPatternSelector } from '../../state/patterns/selector'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState) => {
  const selected = selectedPatternSelector(state)

  return {
    name: selected.name,
    imgPath: selected.imgPath,
    context: selected.context,
    problem: selected.problem,
    fource: selected.fource,
    solution: selected.solution,
    result: selected.result,
  }
}

export default connect(mapStateToProps)(PatternView)

type PatternViewProps = {
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

function PatternView(props: PatternViewProps) {
  return (
    <div>
      <PatternViewComponent
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
