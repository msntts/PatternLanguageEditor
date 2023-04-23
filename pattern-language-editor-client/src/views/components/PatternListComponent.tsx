import React from 'react'

export type Props = {
  names: string[]
  onPatternSelected: (patternName: string) => void
}

function PatternList(props: Props) {
  const arr: JSX.Element[] = []

  if (props.names) {
    props.names.forEach((name) => {
      arr.push(
        <li key={name} id={name} onClick={() => props.onPatternSelected(name)}>
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
