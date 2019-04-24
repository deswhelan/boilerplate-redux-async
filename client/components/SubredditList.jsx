import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

function convertDate(unix) {
  const newDate = new Date(unix)
  return newDate.toString()
}


const Subreddit = ({ subreddits }) => (
  <div>
    {subreddits.map((post, i) => {
      console.log(convertDate(post.created))
      return (< Post
        key={i}
        title={post.title}
        time={convertDate(post.created)}
      />)
    }
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(mapStateToProps)(Subreddit)
