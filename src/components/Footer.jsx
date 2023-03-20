import React from 'react'
import Logo from "../images/logo.jpg"

const Footer = () => {
  return (
    <footer>
    <img src={Logo} alt="" height={100} />
    <span>Made with <b> React.JS </b></span>
    </footer>
  )
}

export default Footer