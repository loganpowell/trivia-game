import React, { Component } from 'react'
import AnswerList from './answer_list'

const Question = (props) => {
  const question = props.quests[0].text
  const answers = props.quests[0].answers
  //
  // const choices = answers.map((answer) => {
  //   return (
  //     <AnswerList answers={choices}
  //   )
  // })

  console.log(answers)
  return (
    <div>
      <div>{question}</div>
      <AnswerList answersDown={answers} />
    </div>
  )
}






export default Question
