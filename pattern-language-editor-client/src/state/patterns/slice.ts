import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './states'

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState: initialState,
  reducers: {},
})

export const IdInitialState = {
  id: 'テスト',
}

export const selectpattarnSlice = createSlice({
  name: 'selectpattarn', //スライス名
  initialState: IdInitialState,
  // 初期値
  // reducerを生成
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
  },
})

// コンポーネントからactionをdispatchできるようにexport
export const { select } = selectpattarnSlice.actions

//リデューサの切り出し
export const selectpattarnReducer = selectpattarnSlice.reducer
