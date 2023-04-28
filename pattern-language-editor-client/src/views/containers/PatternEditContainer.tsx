import React from 'react'
import { connect } from 'react-redux'
import PatternEdit, { PatternChunks } from '../components/PatternEditComponent'
import { selectedPatternSelector, edit } from '../../state/patterns'
import { AppDispatch, RootState } from '../../store'

const mapStateToProps = (state: RootState) => {
  const selected = selectedPatternSelector(state)

  return { ...selected, returnPath: '/' }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onSubmitChanges: (props: PatternChunks) =>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternEdit)
