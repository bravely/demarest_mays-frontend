import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Post from './Post'

const BlogPosts = gql`
  query BlogPosts {
    posts {
      id
      title
      body
      author_name
    }
  }
`

const Blog = ({data: {loading, error, posts}}) => {
  if (loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Error: {error.message}</p>
  } else {
    return (
      <div className="mw7 pa3 pa5-ns center avenir">
        {posts.map((post) =>
          <Post key={post.id} {...post} />
        )}
      </div>
    )
  }
}

const BlogWithData = graphql(BlogPosts)(Blog)

export default BlogWithData
