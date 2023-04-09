import { connect, useSelector } from 'react-redux'
import PatternView, { Props } from '../components/PatternViweComponent'
import { patternsSelector2 } from '../../state/patterns/selector'

const mapStateToProps = (): Props => {
  // const patterns = useSelector((state: RootState) => state.patternsReducer.patterns)

  const patterns2 = useSelector(patternsSelector2)

  return {
    // name: patterns[0].name,
    // imgPath: patterns[0].imgPath,
    // context: patterns[0].context,
    // problem: patterns[0].problem,
    // fource: patterns[0].fource,
    // solution: patterns[0].solution,
    // result: patterns[0].result,

    name: patterns2.name,
    imgPath: patterns2.imgPath,
    context: patterns2.context,
    problem: patterns2.problem,
    fource: patterns2.fource,
    solution: patterns2.solution,
    result: patterns2.result,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternView)
