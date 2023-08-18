import React, { useState } from 'react'
import heart from '../../assets/heart-header.svg';
import message from '../../assets/message-header.svg';
import account from '../../assets/account-header.svg';
import styles from './header.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import { DropDown } from '../DropDown'
import useOutsideAlerter from '../../hook/UseOutside'

export const Navigation = () => {
  const {ref, isShow, setIsShow} = useOutsideAlerter(false)

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
        <Link to='/my/advertisement'>
          Мои объявления
        </Link>
      </div>
      <div className={styles.account}>
        <div>
          <img src={account} alt="account"/>
        </div>
        {/*<div className={styles.dropdown}>*/}
          <p className={styles.p} ref={ref} onClick={() => setIsShow(!isShow)}>GrozMarket</p>
          {
            isShow ? (
              <div className={styles.dropdown_content} >
                <DropDown />
              </div>
            ) : ''
          }
        {/*</div>*/}
      </div>
      <Link to='/add/advertisement'>
        <Button color={'white'} text={'Разместить объявление'} width={205} />
      </Link>
    </div>
  )
}

