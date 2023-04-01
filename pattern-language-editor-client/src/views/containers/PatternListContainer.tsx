import { connect, useSelector } from 'react-redux'
import PatternList, { Props } from '../components/PatternListComponent'
import type { RootState } from '../../store'

const mapStateToProps = (): Props[] => {
  const patterns = useSelector((state: RootState) => state.patternsReducer.patterns)

  return patterns
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternList)
