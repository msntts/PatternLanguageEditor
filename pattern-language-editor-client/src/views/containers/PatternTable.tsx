import { connect, useSelector } from 'react-redux'
import PatternTab, { Props } from '../components/PatternComponentTab'
import type { RootState } from '../../store'
import PatternContainer from './PatternContainer'

const mapStateToProps = (): string[] => {
  const patterns = useSelector((state: RootState) => state.patternsReducer.patterns)

  //パターンの名前をリストに格納して渡している（今回は2個のパターン）
  return patterns.map((item) => item.name)
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternTab)
