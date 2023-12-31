import React from 'react';
import styles from './Message.module.css';
import { Menu } from '../components/Menu';
import { Messages } from '../components/Messages';

export const Message = (props) => {
  return (
    <div className={styles.container}>
      <Menu/>
      <Messages/>
    </div>
  )
}

