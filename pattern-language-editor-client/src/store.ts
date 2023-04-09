import { configureStore } from '@reduxjs/toolkit'
import { patternsReducer, selectpattarnReducer } from './state/patterns'
import { combineReducers } from 'redux'

//リデューサ
const reducer = combineReducers({
  patternsReducer: patternsReducer,
  selectpattarnReducer: selectpattarnReducer,
})

export const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
