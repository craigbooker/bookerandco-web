import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa'
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com/bookerandco" target="_blank">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/bookerandco" target="_blank">
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/bookerandcompany" target="_blank">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
