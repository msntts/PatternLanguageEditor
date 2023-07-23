import { patternsSlice } from './slice'

export const patternsReducer = patternsSlice.reducer
export const { select, edit, create, remove } = patternsSlice.actions
export { patternsSelector, selectedPatternSelector, patternNamesSelector } from './selector'
