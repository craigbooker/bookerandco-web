import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/blog" className="page-link">
          Blog
        </Link>
        {children}
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
      {/* <li>
        <Link to="/services" className="page-link">
          Services
        </Link>
      </li> */}
    </ul>
  )
}

export default Links
