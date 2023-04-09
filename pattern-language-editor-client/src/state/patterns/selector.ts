import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const patternsSelector = createSelector(
  (state: RootState) => state.patternsReducer.patterns,
  (patterns) => patterns
)

// ここでidを用いて選択したパターンを返せるようにしたい
export const patternsSelector2 = createSelector(
  (state: RootState) => state.patternsReducer.patterns,
  (patterns) => patterns[0]
)

export const patternNamesSelector = createSelector(patternsSelector, (patterns) =>
  patterns.map((pattern) => pattern.name)
)
