import React from 'react'

const Post = ({ title, author, permalink, created }) => (
  <div>
    <a href={`https://www.reddit.com${permalink}`}>{title}</a>
    {author}
    {String(Date.UTC(created))}
  </div>
)

export default Post
