import { connect, useSelector } from 'react-redux'
import PatternList, { Props } from '../components/PatternListComponent'
import { patternNamesSelector } from '../../state/patterns'

const mapStateToProps = (): Props => {
  const patternNames = useSelector(patternNamesSelector)

  return { names: patternNames }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PatternList)
