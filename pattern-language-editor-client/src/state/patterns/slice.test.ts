import { patternsSlice } from './slice'
import { PatternState } from './states'

const { create } = patternsSlice.actions

let prevState: PatternState

describe('patternsSlice.actions.create', () => {
  beforeEach(() => {
    // test用のinitial stateを作成する
    prevState = {
      patterns: [
        {
          id: 1,
          name: 'Pattern 1',
          imgPath: 'image_path_1.png',
          context: 'Context 1',
          problem: 'Problem 1',
          fource: 'Force 1',
          solution: 'Solution 1',
          result: 'Result 1',
        },
      ],
      selectedPatternId: -1,
    }
  })

  it('新しいパターンが追加され、新しいidが採番されること', () => {
    const newPattern = {
      id: -1, // ここは書き換えられるはず
      name: 'new pattern name',
      imgPath: 'new pattern img',
      context: 'new pattern context',
      problem: 'new pattern problem',
      fource: 'new pattern force',
      solution: 'new pattern solution',
      result: 'new pattern result',
    }

    // すでにid=1が存在しているのでid=2を採番するはず
    const expectedPattern = { ...newPattern, id: 2 }

    const nextState = patternsSlice.reducer(prevState, create(newPattern))
    expect(nextState.patterns).toContainEqual(expectedPattern)
  })

  it('新しく追加するパターンが既存のidと重複されている場合は、追加されないこと', () => {
    const newPattern = {
      id: 1, // ここが重複している
      name: 'new pattern name',
      imgPath: 'new pattern img',
      context: 'new pattern context',
      problem: 'new pattern problem',
      fource: 'new pattern force',
      solution: 'new pattern solution',
      result: 'new pattern result',
    }

    const nextState = patternsSlice.reducer(prevState, create(newPattern))
    expect(nextState.patterns).not.toContainEqual(newPattern)
  })
})
