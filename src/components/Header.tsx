import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          activeClassName={styles.active}
          className={styles.btn}
          to='/shows'
        >
          Shows
        </NavLink>

        <NavLink
          activeClassName={styles.active}
          className={styles.btn}
          to='/movies'
        >
          Movies
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
