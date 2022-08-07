import React from 'react'
import H1 from './H1'
import Nav from './Nav'
import styles from '../static/Header.module.css'

const Header = (props) => {
  return (
    <header className={styles.page}>
      <img className={styles.logo} src="/logo@1x.png" srcset="/logo@2x.png 2x, /logo@3x.png" alt="BM" />
      <H1 text={'Cards'}/>
      <Nav />
    </header>
  )
}

export default Header