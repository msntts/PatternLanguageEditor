import { connect } from 'react-redux'
import PatternList from '../components/PatternListComponent'
import { patternsSelector, select } from '../../state/patterns'
import { AppDispatch, RootState } from '../../store'

const mapStateToProps = (state: RootState) => {
  const patterns = patternsSelector(state).map((pattern) => ({
    id: pattern.id,
    name: pattern.name,
  }))

  return { patterns: patterns }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onPatternSelected: (patternId: number) => dispatch(select(patternId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternList)
