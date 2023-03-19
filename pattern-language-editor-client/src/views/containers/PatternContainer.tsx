import { connect, useSelector } from 'react-redux'
import PatternComponent, { Props } from '../components/PatternComponent'
import type { RootState } from '../../store'

const mapStateToProps = (): Props => {
  const pattern = useSelector((state: RootState) => state.pattern)

  return {
    name: pattern.name,
    imgPath: pattern.imgPath,
    context: pattern.context,
    problem: pattern.problem,
    fource: pattern.fource,
    solution: pattern.solution,
    result: pattern.result,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternComponent)
