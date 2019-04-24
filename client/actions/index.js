import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const NEW_SUBREDDIT = 'NEW_SUBREDDIT'

export const RECEIVE_JOKE = 'RECEIVE_JOKE'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,newzealand,
    errorMessage: errorMessage
  }
}

export const newSubReddit = (subreddit) => {
  return {
    type: NEW_SUBREDDIT,
    subreddit: subreddit
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchJokes () {
  
  return request
    .get(`/api/v1/reddit/jokes/joke`)
    .then(res => {
      dispatch(receiveJoke(res.body))
    })
    .catch(err => {
      dispatch(showError(err.message))
    })
  
}



export const receiveJoke = (joke) => {
  return {
    type: RECEIVE_JOKE,
    question: joke.setup,
    answer: joke.punchline
  }
}