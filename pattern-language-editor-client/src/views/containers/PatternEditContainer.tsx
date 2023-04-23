import React from 'react'
import { connect } from 'react-redux'
import PatternEdit from '../components/PatternEditComponent'
import { selectedPatternSelector, edit } from '../../state/patterns'
import { AppDispatch, RootState } from '../../store'
import { Pattern } from '../../state/patterns/states'

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
    returnPath: '/',
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onSubmitChanges: (
      id: number,
      name: string,
      imgPath: string,
      context: string,
      problem: string,
      fource: string,
      solution: string,
      result: string
    ) =>
      dispatch(edit({ id, name, imgPath, context, problem, fource, solution, result } as Pattern)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternEdit)
