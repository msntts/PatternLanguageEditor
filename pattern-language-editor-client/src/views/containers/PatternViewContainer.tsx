import { connect } from 'react-redux'
import PatternView from '../components/PatternViewComponent'
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

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternView)
