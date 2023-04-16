import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Pattern } from './states'

export const patternsSelector = createSelector(
  (state: RootState) => state.patternsReducer.patterns,
  (patterns) => patterns
)

export const selectedPatternSelector = createSelector(
  (state: RootState) => state.patternsReducer,
  (state) => {
    const selecteds = state.patterns.filter((pattern) => pattern.name === state.selectedPatternName)

    if (selecteds.length == 1) {
      return selecteds[0]
    } else {
      return {
        name: '',
        imgPath: '',
        context: '',
        problem: '',
        fource: '',
        solution: '',
        result: '',
      } as Pattern
    }
  }
)

export const patternNamesSelector = createSelector(
  (state: RootState) => state.patternsReducer.patterns,
  (patterns) => patterns.map((pattern) => pattern.name)
)
