import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectedPatternSelector } from '../../state/patterns/selector'

const PatternViewContainer = () => {
  const selected = useSelector(selectedPatternSelector)

  return (
    <div>
      <div>
        <label>#{selected.id}</label>
        <input type="text" name={selected.name} value={selected.name} readOnly={true} />
      </div>
      <div>
        <img src={selected.imgPath} />
      </div>
      <div>
        <label>コンテキスト</label>
        <input type="text" value={selected.context} readOnly={true} />
      </div>
      <div>
        <label>問題</label>
        <input type="text" value={selected.problem} readOnly={true} />
      </div>
      <div>
        <label>フォース</label>
        <input type="text" value={selected.fource} readOnly={true} />
      </div>
      <div>
        <label>解決策</label>
        <input type="text" value={selected.solution} readOnly={true} />
      </div>
      <div>
        <label>結果</label>
        <input type="text" value={selected.result} readOnly={true} />
      </div>
      <Link to="/edit">パターンを編集する</Link>
      <Link to="/create">パターンを作成する</Link>
    </div>
  )
}

export default PatternViewContainer
