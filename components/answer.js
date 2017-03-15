import React from 'react'

const Answer = ({choice, choiceMade}) => {
  const text = choice.text
  return (
    <li onClick={() => makeChoice(choice)} className="list-group-item">
      <div className="wildcard">{text}</div>
    </li>
  )
}

export default Answer
