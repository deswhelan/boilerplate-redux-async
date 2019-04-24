import {RECEIVE_JOKE} from '../actions'

function joke (state = {}, action) {
  switch (action.type) {
    case RECEIVE_JOKE:
      return { question: action.question, answer: action.answer}

    default:
      return state
  }
}

export default joke
