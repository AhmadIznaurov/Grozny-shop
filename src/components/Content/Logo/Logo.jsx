import React from 'react';
import logo from '../../../assets/Grozny-shop.png';
import styles from './../content.module.css'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo"/>
    </div>
  )
}

