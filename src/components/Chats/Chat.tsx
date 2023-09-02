import React from 'react';
import styles from '../../Pages/Message.module.css';
import avatar_user from '../../assets/avatar.png';



export const Chat: React.FC= ({ chat }) => {
  return (
    <div className={styles.chat}>
      <div className={styles.avatar_user}>
        <img src={avatar_user} alt="avatar"/>
      </div>
      <div className={styles.messages_right_block}>
        <div className={styles.messages_userName}>
          <p>{chat.userName}</p>
        </div>
        <div className={styles.title_ad}>
          <p>{chat.nameOfAdvertisement}</p>
        </div>
        <div className={styles.message_user}>
          <p>{chat.message}</p>
        </div>
      </div>
    </div>
  )
}

