import React from 'react';
import logo from '../../../assets/Grozny-shop.png';
import styles from './../content.module.css'
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <img src={logo} alt="logo"/>
      </Link>

    </div>
  )
}

