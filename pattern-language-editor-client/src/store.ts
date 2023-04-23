import { configureStore } from '@reduxjs/toolkit'
import { patternsReducer } from './state/patterns'
import { combineReducers } from 'redux'

//リデューサ
const reducer = combineReducers({
  patternsReducer: patternsReducer,
})

export const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
