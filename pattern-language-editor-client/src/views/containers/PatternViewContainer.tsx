import { connect, useSelector } from 'react-redux'
import PatternView, { Props } from '../components/PatternViweComponent'
import type { RootState } from '../../store'

const mapStateToProps = (): Props => {
  const patterns = useSelector((state: RootState) => state.patternsReducer.patterns)

  return {
    name: patterns[0].name,
    imgPath: patterns[0].imgPath,
    context: patterns[0].context,
    problem: patterns[0].problem,
    fource: patterns[0].fource,
    solution: patterns[0].solution,
    result: patterns[0].result,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternView)
