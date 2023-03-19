import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './PatternStates'

export const patternSlice = createSlice({
  name: 'pattern',
  initialState: initialState,
  reducers: {},
})
