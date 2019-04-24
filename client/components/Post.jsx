import React from 'react'

// let convertDate = () => {
//   return (new Date(date * 1000))
// }

const Post = ({title, date, selftext}) => (
  <div><b>{title}</b><br />
  {(new Date(date * 1000)).toString()}<br />
  {selftext}<br /><br /></div>
)

export default Post
