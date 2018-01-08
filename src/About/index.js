import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands'

import resume from './jake_mays_resume_201801.pdf'

const About = () => (
  <article className="pa3 pa5-ns center mw7 avenir">
    <h1 className="f2-m fw1">About</h1>
    <p>
      <a href={resume} className="mr2">Resume</a>
      <a href="https://www.twitter.com/_bravely" className="mr2">
        <FontAwesomeIcon icon={faTwitter} className="blue" />
      </a>
      <a href="https://www.github.com/bravely" className="mr2">
        <FontAwesomeIcon icon={faGithub} className="black"/>
      </a>
    </p>
    <br />
    <p className="measure lh-copy">
      My name is Jake Mays. The (Demarest-) at the top is because I'm now engaged, and will soon be changing my last name!
    </p>

    <p className="measure lh-copy">
      I'm a self-taught software engineer, born in Fresno, CA, but now living in Boise, ID. I'm just at the beginning of running my own blog again- my first since I was a teenager. Forgive my naïveté.
    </p>

    <p className="measure lh-copy">
      Feel free to say hi on Twitter! That's where I'm most likely to see it right now.
    </p>
  </article>
)

export default About
