import React from 'react';
import styles from '../../Pages/Message.module.css';

export const MenuRaiting = (props) => {
  return (
    <div className={styles.menu_raiting}>
      <span>5,0</span>
      <span className={styles.menu_raiting_star}>★</span>
      <span className={styles.menu_raiting_star}>★</span>
      <span className={styles.menu_raiting_star}>★</span>
      <span className={styles.menu_raiting_star}>★</span>
      <span className={styles.menu_raiting_star}>★</span>
    </div>
  )
}
