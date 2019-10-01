import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigations extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigations
