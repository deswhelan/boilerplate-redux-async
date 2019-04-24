import {NEW_SUBREDDIT} from '../actions'

function newSubReddit (state = '', action) {
  switch (action.type) {
    case NEW_SUBREDDIT:
      return action.subreddit

    default:
      return state
  }
}

export default newSubReddit
