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

export type Data = Array<{
  key: {
    name: string
    imgPath: string
    context: string
    problem: string
    fource: string
    solution: string
    result: string
  }
}>

function PatternTab(list: string[]) {
  //listがうまく読み込めていない。
  //仮にリストをおくと表示されることを確認
  const list2 = ['ichigo', 'aoi', 'ran']
  const listItems = (): JSX.Element[] => {
    return list2.map((item) => <li key={item}> {item}</li>)
  }
  console.log(listItems)
  return (
    <span>
      <ul>{listItems()}</ul>
    </span>
  )
}

export default PatternTab
