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

function PatternTab(list: string[]) {
  //listには各パターンのnameが入っている
  const arr: JSX.Element[] = []
  for (let i = 0; i < 2; i++) {
    arr.push(<li key={list[i]}> {list[i]}</li>)
  }

  console.log(list.length)
  return (
    <span>
      <ul>{arr}</ul>
    </span>
  )
}

export default PatternTab
