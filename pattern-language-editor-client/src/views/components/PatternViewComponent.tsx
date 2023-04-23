import React from 'react'

export type Props = {
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

function PatternView(pattern: Props) {
  return (
    <div>
      <div>
        <input type="text" value={pattern.name} readOnly={true} />
      </div>
      <div>
        <img src={pattern.imgPath} />
      </div>
      <div>
        <label>コンテキスト</label>
        <input type="text" value={pattern.context} readOnly={true} />
      </div>
      <div>
        <label>問題</label>
        <input type="text" value={pattern.problem} readOnly={true} />
      </div>
      <div>
        <label>フォース</label>
        <input type="text" value={pattern.fource} readOnly={true} />
      </div>
      <div>
        <label>解決策</label>
        <input type="text" value={pattern.solution} readOnly={true} />
      </div>
      <div>
        <label>結果</label>
        <input type="text" value={pattern.result} readOnly={true} />
      </div>
    </div>
  )
}

export default PatternView
