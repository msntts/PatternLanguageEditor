import React from 'react'

export type Props = {
  names: string[]
}

function PatternList(listItem: Props) {
  const arr: JSX.Element[] = []

  if (listItem) {
    listItem.names.forEach((name) => {
      arr.push(<li key={name}> {name}</li>)
    })
  }

  return (
    <span>
      <ul>{arr}</ul>
    </span>
  )
}

export default PatternList
