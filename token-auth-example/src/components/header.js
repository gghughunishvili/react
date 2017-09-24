import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">Sign in</li>
          <li className="nav-item">SIng out</li>
          <li className="nav-item">Some</li>
        </ul>
      </nav>
    )
  }
}

export default Header
