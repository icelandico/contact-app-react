import React, { Component } from 'react'
import { Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/newContact'>Create new Contact</Link>
          </li>
          <li>
            <Link to='/contacts'>Show Contacts list</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header