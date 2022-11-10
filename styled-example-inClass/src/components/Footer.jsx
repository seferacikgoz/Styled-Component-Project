import React from 'react'
import {FaTwitterSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <ul>
        <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
        <li>+1 (571) 360 66 77</li>
        <li>contact@clarusway.com</li>
      </ul>

      <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
      </ul>

      <ul>
        <li>Career</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>

      <div>
        <a href="http:/>/www.twitter.com"><FaTwitterSquare/></a>
        <a href="http:/>/www.facebook.com"><FaFacebookSquare/></a>
        <a href="http:/>/www.linkedin.com"><FaLinkedin/></a>
      </div>
    </div>
  )
}

export default Footer