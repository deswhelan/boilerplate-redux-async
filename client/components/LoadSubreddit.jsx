import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state(
     { subReddit:'newzealand'}
    )
  }

  handleChange(e){
    this.setState(e.value.target)
  }
  render(){

  const { children, dispatch } = this.props;
  
    return(
<div>
  <input name="subReddit" onChange={this.handleChange}>

  <button onClick={() => dispatch(fetchPosts(this.state.subreddit))}>

      Fetch Posts
    </button>
    {children}
  </input>

  </div>

    )
  }
}


export default connect()(LoadSubreddit)
