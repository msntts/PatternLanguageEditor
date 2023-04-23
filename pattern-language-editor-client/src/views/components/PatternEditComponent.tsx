import React, { ChangeEvent, useState } from 'react'

export type Props = {
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

function PatternEdit(pattern: Props) {
  const [previewImgPath, setPreviewImgPath] = useState<null | string>(pattern.imgPath)

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
        <input type="text" defaultValue={pattern.name} />
      </div>
      <div>
        <img src={pattern.imgPath} />
        {previewImgPath && <img src={previewImgPath} />}
        <input type="file" onChange={previewImage} accept="image/*"></input>
      </div>
      <div>
        <label>コンテキスト</label>
        <input type="text" defaultValue={pattern.context} />
      </div>
      <div>
        <label>問題</label>
        <input type="text" defaultValue={pattern.problem} />
      </div>
      <div>
        <label>フォース</label>
        <input type="text" defaultValue={pattern.fource} />
      </div>
      <div>
        <label>解決策</label>
        <input type="text" defaultValue={pattern.solution} />
      </div>
      <div>
        <label>結果</label>
        <input type="text" defaultValue={pattern.result} />
      </div>
    </div>
  )
}

export default PatternEdit
