import { configureStore } from '@reduxjs/toolkit'
import { patternsReducer } from './state/patterns'

export const store = configureStore({
  reducer: {
    patternsReducer: patternsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
