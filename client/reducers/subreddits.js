import { RECEIVE_POSTS } from '../actions'

function subreddits(state = [], action) {
  console.log(action)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    default:
      return state
  }
}

export default subreddits
