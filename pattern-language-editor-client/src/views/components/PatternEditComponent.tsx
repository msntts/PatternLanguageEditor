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

interface EditProp {
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

function PatternEdit(pattern: Props) {
  const [previewImgPath, setPreviewImgPath] = useState<string>(pattern.imgPath)

  const [patternElements, setPattern] = useState<EditProp>({
    name: pattern.name,
    imgPath: pattern.imgPath,
    context: pattern.context,
    problem: pattern.problem,
    fource: pattern.fource,
    solution: pattern.solution,
    result: pattern.result,
  })

  const handleEditFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPattern({ ...patternElements, [event.target.name]: event.target.value })
  }

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
        <label>#{pattern.id}</label>
        <input
          type="text"
          defaultValue={pattern.name}
          name="name"
          onChange={handleEditFormChange}
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
          name="context"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>問題</label>
        <input
          type="text"
          defaultValue={pattern.problem}
          name="problem"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>フォース</label>
        <input
          type="text"
          defaultValue={pattern.fource}
          name="fource"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>解決策</label>
        <input
          type="text"
          defaultValue={pattern.solution}
          name="solution"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <label>結果</label>
        <input
          type="text"
          defaultValue={pattern.result}
          name="result"
          onChange={handleEditFormChange}
        />
      </div>
      <div>
        <Link
          to={pattern.returnPath}
          onClick={() =>
            pattern.onSubmitChanges(
              pattern.id,
              patternElements.name,
              previewImgPath,
              patternElements.context,
              patternElements.problem,
              patternElements.fource,
              patternElements.solution,
              patternElements.result
            )
          }
        >
          <div> 適用</div>
        </Link>
        <Link to={pattern.returnPath}>キャンセル</Link>
      </div>
    </div>
  )
}

export default PatternEdit
