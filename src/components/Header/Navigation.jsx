import React from 'react'
import heart from '../../assets/heart-header.svg';
import message from '../../assets/message-header.svg';
import account from '../../assets/account-header.svg';
import styles from './header.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.heart}>
        <img src={heart} alt="heart"/>
      </div>
      <div className={styles.message}>
        <Link to='/message'>
          <img src={message} alt="message"/>
        </Link>
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
      <Link to='/add/advertisement'>
        <Button color={'white'} text={'Разместить объявление'} width={205} />
      </Link>
    </div>
  )
}

