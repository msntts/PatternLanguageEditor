import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedPatternSelector, remove } from '../../state/patterns'

const PatternViewContainer = () => {
  const selected = useSelector(selectedPatternSelector)
  const dispatch = useDispatch()

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
      <label
        onClick={() => {
          dispatch(remove(selected.id))
        }}
      >
        パターンを削除する
      </label>
    </div>
  )
}

export default PatternViewContainer
