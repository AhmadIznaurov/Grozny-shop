import React from 'react'
import heart from '../../assets/heart-header.svg';
import message from '../../assets/message-header.svg';
import account from '../../assets/account-header.svg';
import styles from './header.module.css'
import { Button } from '../Button/Button'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart"/>
      </div>
      <div className={styles.message}>
        <img src={message} alt="message"/>
      </div>
      <div className={styles.announcement}>
        Мои объявления
      </div>
      <div className={styles.account}>
        <div>
          <img src={account} alt="account"/>
        </div>
         <p>GrozMarket</p>
      </div>
      <Button color={'white'} text={'Разместить объявление'} width={205}/>
    </div>
  )
}

