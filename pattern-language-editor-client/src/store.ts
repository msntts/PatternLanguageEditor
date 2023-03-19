import { configureStore } from '@reduxjs/toolkit'
import { patternReducer } from './state/pattern'

export const store = configureStore({
  reducer: {
    pattern: patternReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
