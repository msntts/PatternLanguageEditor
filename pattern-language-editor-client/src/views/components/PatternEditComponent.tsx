import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

export type Props = {
  id: number
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string

  returnPath: string

  onSubmitChanges: (
    id: number,
    name: string,
    imgPath: string,
    context: string,
    problem: string,
    fource: string,
    solution: string,
    result: string
  ) => void
}

function PatternEdit(pattern: Props) {
  const [patternName, setPatternName] = useState<string>(pattern.name)
  const [previewImgPath, setPreviewImgPath] = useState<string>(pattern.imgPath)
  const [patternContext, setPatternContext] = useState<string>(pattern.context)
  const [patternProblem, setPatternProblem] = useState<string>(pattern.problem)
  const [patternFource, setPatternFource] = useState<string>(pattern.fource)
  const [patternSolution, setPatternSolution] = useState<string>(pattern.solution)
  const [patternResult, setPatternResult] = useState<string>(pattern.result)

  function previewImage(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files

    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.result !== null) {
          setPreviewImgPath(reader.result as string)
        }
      }

      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          defaultValue={pattern.name}
          onChange={(event) => {
            setPatternName(event.target.value)
          }}
        />
      </div>
      <div>
        <img src={pattern.imgPath} />
        {previewImgPath && <img src={previewImgPath} />}
        <input type="file" onChange={previewImage} accept="image/*"></input>
      </div>
      <div>
        <label>コンテキスト</label>
        <input
          type="text"
          defaultValue={pattern.context}
          onChange={(event) => {
            setPatternContext(event.target.value)
          }}
        />
      </div>
      <div>
        <label>問題</label>
        <input
          type="text"
          defaultValue={pattern.problem}
          onChange={(event) => {
            setPatternProblem(event.target.value)
          }}
        />
      </div>
      <div>
        <label>フォース</label>
        <input
          type="text"
          defaultValue={pattern.fource}
          onChange={(event) => {
            setPatternFource(event.target.value)
          }}
        />
      </div>
      <div>
        <label>解決策</label>
        <input
          type="text"
          defaultValue={pattern.solution}
          onChange={(event) => {
            setPatternSolution(event.target.value)
          }}
        />
      </div>
      <div>
        <label>結果</label>
        <input
          type="text"
          defaultValue={pattern.result}
          onChange={(event) => {
            setPatternResult(event.target.value)
          }}
        />
      </div>
      <div>
        <Link
          to={pattern.returnPath}
          onClick={() =>
            pattern.onSubmitChanges(
              pattern.id,
              patternName,
              previewImgPath,
              patternContext,
              patternProblem,
              patternFource,
              patternSolution,
              patternResult
            )
          }
        >
          適用
        </Link>
        <Link to={pattern.returnPath}>キャンセル</Link>
      </div>
    </div>
  )
}

export default PatternEdit
