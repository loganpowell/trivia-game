import React from 'react'
import ReactDOM from 'react-dom'
import Questions from './components/questions'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      currentQ: 0,
      correct: 0,
      wrong: 0,
      timer: 30,
    }
    $.ajax({
      url: 'http://cocktail-trivia-api.herokuapp.com/api/category/science-nature/difficulty/easy',
      method: "GET"
    }).done((response) => {
      console.log(response)
      this.setState({questions: response})
    })
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
