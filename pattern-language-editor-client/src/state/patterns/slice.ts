import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, Pattern } from './states'

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState: initialState,
  reducers: {
    select: (state, action: PayloadAction<number>) => {
      state.selectedPatternId = action.payload
    },
    edit: (state, action: PayloadAction<Pattern>) => {
      const editedIndex = state.patterns.findIndex((pattern) => pattern.id === action.payload.id)

      try {
        state.patterns[editedIndex].name = action.payload.name
        state.patterns[editedIndex].imgPath = action.payload.imgPath
        state.patterns[editedIndex].context = action.payload.context
        state.patterns[editedIndex].problem = action.payload.problem
        state.patterns[editedIndex].fource = action.payload.fource
        state.patterns[editedIndex].solution = action.payload.solution
        state.patterns[editedIndex].result = action.payload.result
      } catch {
        console.log(`${action.payload.id}は存在していません。`)
      }
    },
  },
})
