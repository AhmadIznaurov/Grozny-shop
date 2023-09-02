import React from 'react';
import styles from '../../Pages/Message.module.css';
import { MessagesButton } from './MessagesButton'
import { Chats } from '../Chats'

export const Messages: React.FC = () => {


  return (
    <div className={styles.messages}>
   <span>Сообщения</span>
      <MessagesButton />
      <Chats />
    </div>
  )
}

