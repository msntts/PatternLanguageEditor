import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

function PatternComponent() {
  const pattern = useSelector((state: RootState) => state.pattern)

  return (
    <div>
      <div>
        <input type="text" defaultValue={pattern.name} readOnly={true} />
      </div>
      <div>
        <img src={pattern.imgPath} />
      </div>
      <div>
        <label>コンテキスト</label>
        <input type="text" defaultValue={pattern.context} readOnly={true} />
      </div>
      <div>
        <label>問題</label>
        <input type="text" defaultValue={pattern.problem} readOnly={true} />
      </div>
      <div>
        <label>フォース</label>
        <input type="text" defaultValue={pattern.fource} readOnly={true} />
      </div>
      <div>
        <label>解決策</label>
        <input type="text" defaultValue={pattern.solution} readOnly={true} />
      </div>
      <div>
        <label>結果</label>
        <input type="text" defaultValue={pattern.result} readOnly={true} />
      </div>
    </div>
  )
}

export default PatternComponent
