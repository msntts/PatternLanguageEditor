import { connect, useSelector } from 'react-redux'
import PatternTab, { Props, Data } from '../components/PatternComponentTab'
import type { RootState } from '../../store'
import PatternContainer from './PatternContainer'

const mapStateToProps = (): string[] => {
  const patterns = useSelector((state: RootState) => state.patternsReducer.patterns)
  const list = patterns.map((item) => item.name)

  console.log(list)

  return patterns.map((item) => item.name)

  //   return {
  //     name: patterns[1].name,
  //     imgPath: patterns[0].imgPath,
  //     context: patterns[0].context,
  //     problem: patterns[0].problem,
  //     fource: patterns[0].fource,
  //     solution: patterns[0].solution,
  //     result: patterns[0].result,
  //   }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternTab)
