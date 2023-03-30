import { connect, useSelector } from 'react-redux'
import PatternTab, { Props } from '../components/PatternComponentTab'
import type { RootState } from '../../store'

const mapStateToProps = (): Props[] => {
  const patterns = useSelector((state: RootState) => state.patternsReducer.patterns)

  return patterns
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternTab)
