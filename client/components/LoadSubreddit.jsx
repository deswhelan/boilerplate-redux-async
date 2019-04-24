import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subredditName: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      subredditName: event.target.value
    })
  }
  handleClick(event) {

  }

  render() {
    return (
      <div>
        <input type='text' name='subreddit' placeholder='type subreddit' onChange={this.handleChange}></input>
        <button onClick={() => this.props.dispatch(fetchPosts(this.state.subredditName))}>
          Fetch Posts
        </button>
        {this.props.children}
      </div >
    )
  }
}

// const LoadSubreddit = ({ children, dispatch }) => (
//   <div>
//     <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//       Fetch Posts
//     </button>
//     {children}
//   </div>
// )

export default connect()(LoadSubreddit)
