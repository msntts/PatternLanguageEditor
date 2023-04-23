import React from 'react'

export type Props = {
  patterns: {
    id: number
    name: string
  }[]
  onPatternSelected: (patternId: number) => void
}

function PatternList(props: Props) {
  const arr: JSX.Element[] = []

  if (props.patterns) {
    props.patterns.forEach(({ id, name }) => {
      arr.push(
        <li key={name} id={name} onClick={() => props.onPatternSelected(id)}>
          #{id} {name}
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
