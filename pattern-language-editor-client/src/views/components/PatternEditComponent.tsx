import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export type PatternChunks = {
  id: number
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

type PatternEditProps = PatternChunks & {
  returnPath: string

  onSubmitChanges: (patternChunks: PatternChunks) => void
}

function PatternEdit(props: PatternEditProps) {
  const [patternChunks, setPatternChunks] = useState<PatternChunks>({ ...(props as PatternChunks) })

  const handleEditFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPatternChunks({ ...patternChunks, [event.target.name]: event.target.value })
  }

  const handleEditImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.result !== null) {
          setPatternChunks({ ...patternChunks, imgPath: reader.result as string })
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <div>
        <label>#{patternChunks.id}</label>
        <input
          type="text"
          defaultValue={patternChunks.name}
          name="name"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        {patternChunks.imgPath && <img src={patternChunks.imgPath} />}
        <input type="file" onChange={handleEditImage} accept="image/*"></input>
      </div>
      <div>
        <label>コンテキスト</label>
        <input
          type="text"
          defaultValue={patternChunks.context}
          name="context"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>問題</label>
        <input
          type="text"
          defaultValue={patternChunks.problem}
          name="problem"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>フォース</label>
        <input
          type="text"
          defaultValue={patternChunks.fource}
          name="fource"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>解決策</label>
        <input
          type="text"
          defaultValue={patternChunks.solution}
          name="solution"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>結果</label>
        <input
          type="text"
          defaultValue={patternChunks.result}
          name="result"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <Link
          to={props.returnPath}
          onClick={() => props.onSubmitChanges({ ...(patternChunks as PatternChunks) })}
        >
          適用
        </Link>

        <Link to={props.returnPath}>キャンセル</Link>
      </div>
    </div>
  )
}

export default PatternEdit
