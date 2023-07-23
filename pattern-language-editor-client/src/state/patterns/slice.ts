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
        state.patterns[editedIndex] = action.payload
      } catch {
        console.log(`${action.payload.id}は存在していません。`)
      }
    },
    create: (state, action: PayloadAction<Pattern>) => {
      // create時点ではidは見採番のはず。なのでstateからidで何かが見つかるのはおかしい
      if (state.patterns.findIndex((pattern) => pattern.id === action.payload.id) < 0) {
        // TODO 本処理は最終的にはサーバーへリクエストを送り、サーバー側で採番してもらう
        // 暫定実装として、ここで適当に採番する
        const newPattern = action.payload
        try {
          newPattern.id = state.patterns[state.patterns.length - 1].id + 1
        } catch {
          newPattern.id = 1
        }

        state.patterns.push(newPattern)
      } else {
        console.log(`${action.payload.id}がすでに存在しています。`)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const updatedPatterns = state.patterns.filter((pattern) => pattern.id !== action.payload)

      if (state.patterns.length !== updatedPatterns.length) {
        state.patterns = updatedPatterns
      } else {
        console.log(`${action.payload}は存在していません。`)
      }
    },
  },
})
