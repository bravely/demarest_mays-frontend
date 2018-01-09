import React, { Fragment } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import ReactGA from 'react-ga'

import resume from './jake_mays_resume_201801.pdf'

const About = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (<Fragment>
    <h1 className="f2-m fw1">About</h1>
    <p>
      <a href={resume} onClick={e => ReactGA.pageview(`Resume Download: ${resume}`)} target="_blank" className="mr2">Resume</a>
      <a href="https://www.twitter.com/_bravely" onClick={e => ReactGA.pageview("Twitter: https://www.twitter.com/_bravely")} target="_blank" className="mr2">
        <FontAwesomeIcon icon={faTwitter} className="blue" />
      </a>
      <a href="https://www.github.com/bravely" onClick={e => ReactGA.pageview("Github: https://www.github.com/bravely")} target="_blank" className="mr2">
        <FontAwesomeIcon icon={faGithub} className="black" />
      </a>
      <a href="https://www.linkedin.com/in/bravely" onClick={e => ReactGA.pageview("Linkedin: https://www.github.com/bravely")} target="_blank" className="mr2">
        <FontAwesomeIcon icon={faLinkedin} className="dark-blue" />
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
  </Fragment>)
}

export default About
