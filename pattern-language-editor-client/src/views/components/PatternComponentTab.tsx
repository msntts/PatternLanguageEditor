import React from 'react'

export type Props = {
  name: string
  imgPath: string
  context: string
  problem: string
  fource: string
  solution: string
  result: string
}

function PatternTab(patterns: Props[]) {
  const arr: JSX.Element[] = []
  for (let i = 0; i < Object.keys(patterns).length; i++) {
    arr.push(<li key={patterns[i].name}> {patterns[i].name}</li>)
  }

  return (
    <span>
      <ul>{arr}</ul>
    </span>
  )
}

export default PatternTab
