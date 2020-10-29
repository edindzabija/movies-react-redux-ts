import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className='nav-links'>
          <li>
            {/* <NavLink exact to='/shows'>
              Shows
            </NavLink> */}
          </li>
          <li>
            <NavLink exact to='/movies'>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
