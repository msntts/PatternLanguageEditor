import React, { ChangeEvent, useState } from 'react'
import { Button, Dialog, Input, TextField } from '@mui/material'
import { Box, Stack } from '@mui/system'

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

type PatternInputDialogProps = PatternChunks & {
  visible: boolean

  onSubmitChanges: (patternChunks: PatternChunks) => void
  onCancel: () => void
}

const PatternInputDialog = (props: PatternInputDialogProps) => {
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
    <Dialog open={props.visible}>
      <Box style={{ minHeight: '50vh', overflowY: 'auto', padding: '20px' }}>
        <TextField
          id="name"
          label={'#' + patternChunks.id + 'パターン名'}
          defaultValue={patternChunks.name}
          variant="outlined"
          name="name"
          onChange={handleEditFormChange}
          size="small"
          margin="dense"
        />

        <Box>
          {patternChunks.imgPath && (
            <img
              src={patternChunks.imgPath}
              style={{ maxWidth: '100%', maxHeight: '200px', width: 'auto', height: 'auto' }}
            />
          )}
          <Input type="file" onChange={handleEditImage} inputProps={{ accept: 'image/*' }}></Input>
        </Box>

        <TextField
          id="context"
          label="コンテキスト"
          defaultValue={patternChunks.context}
          variant="outlined"
          name="context"
          onChange={handleEditFormChange}
          fullWidth
          margin="dense"
          multiline
          maxRows={4}
        />

        <TextField
          id="problem"
          label="問題"
          defaultValue={patternChunks.problem}
          variant="outlined"
          name="problem"
          onChange={handleEditFormChange}
          fullWidth
          margin="dense"
          multiline
          maxRows={4}
        />

        <TextField
          id="fource"
          label="フォース"
          defaultValue={patternChunks.fource}
          variant="outlined"
          name="fource"
          onChange={handleEditFormChange}
          fullWidth
          margin="dense"
          multiline
          maxRows={4}
        />

        <TextField
          id="solution"
          label="解決策"
          defaultValue={patternChunks.solution}
          variant="outlined"
          name="solution"
          onChange={handleEditFormChange}
          fullWidth
          margin="dense"
          multiline
          maxRows={4}
        />

        <TextField
          id="result"
          label="結果"
          defaultValue={patternChunks.result}
          variant="outlined"
          name="result"
          onChange={handleEditFormChange}
          fullWidth
          margin="dense"
          multiline
          maxRows={4}
        />
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          sx={{ display: 'flex', width: '100%' }}
        >
          {' '}
          <Button
            onClick={() => {
              props.onCancel()
            }}
          >
            キャンセル
          </Button>
          <Button
            variant="contained"
            onClick={() => props.onSubmitChanges({ ...(patternChunks as PatternChunks) })}
          >
            適用
          </Button>
        </Stack>
      </Box>
    </Dialog>
  )
}

export default PatternInputDialog
