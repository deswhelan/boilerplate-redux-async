import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

// const LoadSubreddit = ({children, dispatch}) => (
//   <div>
//     <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//       Fetch Posts
//     </button>

//     {children}
//   </div>
// )

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subreddit: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange() {
    this.setState({ subreddit: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(fetchPosts(this.state.subreddit))
  }

  render() {
    return (

      <div>

        <input type="text" name='text' onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Fetch Posts
        </button>


      </div>
    )
  }
}


export default connect()(LoadSubreddit)