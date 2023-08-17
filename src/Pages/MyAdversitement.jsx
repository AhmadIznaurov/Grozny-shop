import React from 'react';
import styles from '../Pages/Message.module.css';
import { Menu } from '../components/Menu'
import { Adversitement } from '../components/Adversitement/Adversitement'

export const MyAdversitement = (props) => {
  return (
    <div className={styles.container}>
        <Menu />
        <Adversitement />
    </div>
  )
}

