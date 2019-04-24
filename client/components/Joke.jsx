import React from 'react'
import {connect} from 'react-redux'
import {fetchJokes} from '../actions'




const Joke = ({question, answer}) => (
  <div>
        <h3>Q. {question} </h3> <br/>
        <p>A. {answer} </p>
        <hr />
  </div>
)


function mapStateToProps (state) {
  console.log ('jokeglobalstate', state)
  return {
    question: state.joke.question,
    answer: state.joke.answer,
  }
}

export default connect(mapStateToProps)(Joke)
