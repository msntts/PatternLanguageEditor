import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './states'

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState: initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.selectedPatternName = action.payload
    },
  },
})
