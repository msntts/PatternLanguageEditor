import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedPatternSelector, remove } from '../../state/patterns'
import Button from '@mui/material/Button'
import PatternEditDialog from './PatternEditDialogContainer'

const PatternViewContainer = () => {
  const selected = useSelector(selectedPatternSelector)
  const dispatch = useDispatch()

  const [dialogVisible, setDialogVisible] = useState(false)

  const onApplyCreation = (success: boolean) => {
    if (success) {
      setDialogVisible(false)
    } else {
      // TODO: API失敗したら画面になんか出すとか
    }
  }

  const onCancelCreation = () => {
    setDialogVisible(false)
  }

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
      <Button onClick={() => setDialogVisible(true)}>パターンを編集する</Button>
      <label
        onClick={() => {
          dispatch(remove(selected.id))
        }}
      >
        パターンを削除する
      </label>

      {dialogVisible && (
        <PatternEditDialog
          visible={dialogVisible}
          onApply={onApplyCreation}
          onCancel={onCancelCreation}
        />
      )}
    </div>
  )
}

export default PatternViewContainer
