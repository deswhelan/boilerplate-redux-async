import React from 'react'
import {newSubReddit} from '../actions'
import { connect } from 'react-redux';

class InputSubreddit extends React.Component {
  constructor(props) {
    super(props)
    //this.store = this.props.store
  
  }
  render () {
    //const newSubReddit = (subreddit)
    const handleChange = e => {
     
      this.props.dispatch(newSubReddit(e.target.value))
    }

    return (
      <div>
        <p>Enter sub-Reddit:
        <input type='text' name='subred' onChange={handleChange} />
        </p>
      </div>
    )
  }
}

export default connect()(InputSubreddit)