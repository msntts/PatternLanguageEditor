import { patternsSlice } from './slice'
import { PatternState } from './states'

const { edit, create, remove } = patternsSlice.actions

let prevState: PatternState

describe('patternsSlice.actions.edit', () => {
  beforeEach(() => {
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

  it('存在するid=1のパターンが正しく変更されること', () => {
    const editedPattern = {
      ...prevState.patterns[0],
      name: 'Pattern1 Edited',
      imgPath: 'image_path_1.png Edited',
      context: 'Context 1 Edited',
      problem: 'Problem 1 Edited',
      fource: 'Force 1 Edited',
      solution: 'Solution 1 Edited',
      result: 'Result 1 Edited',
    }

    const nextState = patternsSlice.reducer(prevState, edit(editedPattern))
    expect(nextState.patterns).toContainEqual(editedPattern)
  })
})

describe('patternsSlice.actions.create', () => {
  beforeEach(() => {
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

describe('patternsSlice.actions.remove', () => {
  beforeEach(() => {
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
        {
          id: 2,
          name: 'Pattern 2',
          imgPath: 'image_path_2.png',
          context: 'Context 2',
          problem: 'Problem 2',
          fource: 'Force 2',
          solution: 'Solution 2',
          result: 'Result 2',
        },
      ],
      selectedPatternId: -1,
    }
  })

  it('存在するid=1のパターンが削除されること', () => {
    const deletionPattern = prevState.patterns[0]
    const exceptedLength = prevState.patterns.length - 1

    const nextState = patternsSlice.reducer(prevState, remove(deletionPattern.id))
    expect(nextState.patterns).not.toContainEqual(deletionPattern)
    expect(nextState.patterns).toHaveLength(exceptedLength)
  })

  it('存在しないid=3のパターンが存在しない場合は何も変更されないこと', () => {
    const deletedPattern = prevState.patterns[0]
    const exceptedLength = prevState.patterns.length

    const nextState = patternsSlice.reducer(prevState, remove(3))
    expect(nextState.patterns).toContainEqual(deletedPattern)
    expect(nextState.patterns).toHaveLength(exceptedLength)
  })
})
