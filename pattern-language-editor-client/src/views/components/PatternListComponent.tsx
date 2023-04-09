import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, store } from '../../store'
import { select } from '../../state/patterns/slice'

export type Props = {
  names: string[]
}

function PatternList(listItem: Props) {
  const dispatch = useDispatch()

  const arr: JSX.Element[] = []

  const onClick = (e: any) => {
    dispatch(select(e.currentTarget.id))
  }

  if (listItem) {
    listItem.names.forEach((name) => {
      arr.push(
        <li key={name} id={name} onClick={onClick}>
          {name}
        </li>
      )
    })
  }

  return (
    <span>
      <ul>{arr}</ul>
    </span>
  )
}

export default PatternList
