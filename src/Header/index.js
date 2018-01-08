import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="db dt-l w-100 border-box pa3 ph5-l baskerville">
    <Link to="/" className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Home" href="#home">
      Jake (Demarest-) Mays
    </Link>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <Link to="/about" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="About">
        About
      </Link>
    </div>
  </nav>
)

export default Header
