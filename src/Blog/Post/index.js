import React from 'react'
import renderHTML from 'react-render-html'

const Post = ({ heroImage, title, body }) => (
  <article className="bt bb b--black-10">
    {heroImage ? "this shouldn't happen" : null}
    <h1 className="f3 fw1 baskerville mt0 lh-title">
      {title}
    </h1>
    <p className="f6 f5-l lh-copy">
      {renderHTML(body)}
    </p>
  </article>
)

export default Post
