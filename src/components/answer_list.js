import React, { Component } from 'react'
import Answer from './answer'

const AnswerList = (props) => {
  const choices = props.answersDown.map((ans, index) => {
    return (
      <Answer
        choice={ans}
        key={props.answersDown[index.key]}
        choiceMade={props.makeChoice}
      />
    )
  })
  return(
    <ul className="col-12 list-group">
      {choices}
    </ul>
  )
}

export default AnswerList
