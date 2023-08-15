import React from 'react';
import styles from '../../Pages/Message.module.css';
import { Button } from '../Button/Button'

export const MessagesButton = (props) => {
  return (
    <div className={styles.messages_button}>
      <div className="all_messages">
        <Button
          text="Все сообщения"
          color="white"
          width="230px"
        />
      </div>
      <div className="filtered_button">
        <Button
          text="Фильтр"
          color="white"
          width="230px"
        />
      </div>
      <div className={styles.search_form}>
        <input
          type="text"
          placeholder='Поиск по сообщениям...'
        />
      </div>
    </div>
  )
}
