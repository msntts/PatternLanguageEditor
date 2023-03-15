import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './PatternsStates'

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState: initialState,
  reducers: {},
})
