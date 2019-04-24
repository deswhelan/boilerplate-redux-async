import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

import InputSubreddit from './InputSubreddit'


const LoadSubreddit = ({children, dispatch, searchterm}) => (
  <div>
        <InputSubreddit />
    <button onClick={() => dispatch(fetchPosts(searchterm))}>
      Fetch Posts
    </button>
    {children}
  </div>
)
function mapStateToProps (state) {
  console.log(state)
  return {
    searchterm: state.newSubReddit
  }
}
export default connect(mapStateToProps)(LoadSubreddit)
