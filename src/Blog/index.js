import React, { Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactGA from 'react-ga'

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
    ReactGA.pageview(window.location.pathname + window.location.search)
    
    return (
      <Fragment>
        {posts.map((post) =>
          <Post key={post.id} {...post} />
        )}
      </Fragment>
    )
  }
}

const BlogWithData = graphql(BlogPosts)(Blog)

export default BlogWithData
