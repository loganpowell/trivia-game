import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Question from './components/question'
import $ from 'jquery'
import ScienceQuestions from '../data/science.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: ScienceQuestions,
      currentQ: 0,
      correct: 0,
      wrong: 0,
      timer: 30
    }
    console.log(this.state.questions)
  }

  render() {
    return(
      <Question quests={this.state.questions} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
