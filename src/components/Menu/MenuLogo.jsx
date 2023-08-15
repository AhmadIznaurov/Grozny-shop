import React from 'react';
import styles from '../../Pages/Message.module.css';
import menu_logo from '../../assets/Grozny-shop_round.png';

export const MenuLogo = (props) => {
  return (
    <div className={styles.menu_logo}>
      <img src={menu_logo} alt="menu"/>
    </div>
  )
}

