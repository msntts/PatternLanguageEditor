import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const patternsSelector = createSelector(
  (state: RootState) => state.patternsReducer.patterns,
  (patterns) => patterns
)

export const patternNamesSelector = createSelector(patternsSelector, (patterns) =>
  patterns.map((pattern) => pattern.name)
)
