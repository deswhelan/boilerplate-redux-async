import React from 'react'

const Post = ({title, author, permalink}) => (
  <div>
    <a href={`https://www.reddit.com${permalink}`}>{title}</a>
    {author}
  </div>
)

export default Post
