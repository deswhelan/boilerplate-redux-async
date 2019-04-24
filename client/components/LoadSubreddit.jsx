import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'




class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subreddit: null,
    }
  };



  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      subreddit: e.target.value,
    })
  }


  render() {
    return (
      <div>
        <form>
          <input type="text" className="subreddit_input" onChange={this.handleChange} />
          <button type="button" onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
            Fetch Posts
          </button>
        </form>
        {this.props.children}
      </div>
    )
  }
}




export default connect()(LoadSubreddit)



// const LoadSubreddit = ({ children, dispatch }) => (