import { connect } from 'react-redux'
import PatternList from '../components/PatternListComponent'
import { patternNamesSelector, select } from '../../state/patterns'
import { AppDispatch, RootState } from '../../store'

const mapStateToProps = (state: RootState) => ({
  names: patternNamesSelector(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onPatternSelected: (patternName: string) => dispatch(select(patternName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternList)
