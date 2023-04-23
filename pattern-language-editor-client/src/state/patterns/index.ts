import { patternsSlice } from './slice'

export const patternsReducer = patternsSlice.reducer
export const { select } = patternsSlice.actions
export { patternsSelector, selectedPatternSelector, patternNamesSelector } from './selector'
