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

function Pattern({ name, imgPath, context, problem, fource, solution, result }: Props) {
  return (
    <div>
      <div>
        <input type="text" defaultValue={name} readOnly={true} />
      </div>
      <div>
        <img src={imgPath} />
      </div>
      <div>
        <label>コンテキスト</label>
        <input type="text" defaultValue={context} readOnly={true} />
      </div>
      <div>
        <label>問題</label>
        <input type="text" defaultValue={problem} readOnly={true} />
      </div>
      <div>
        <label>フォース</label>
        <input type="text" defaultValue={fource} readOnly={true} />
      </div>
      <div>
        <label>解決策</label>
        <input type="text" defaultValue={solution} readOnly={true} />
      </div>
      <div>
        <label>結果</label>
        <input type="text" defaultValue={result} readOnly={true} />
      </div>
    </div>
  )
}

export default Pattern
