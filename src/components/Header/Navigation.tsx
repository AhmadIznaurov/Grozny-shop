import React from 'react'
import heart from '../../assets/heart-header.svg';
import message from '../../assets/message-header.svg';
import account from '../../assets/Grozny-shop_round.png';
import styles from './header.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'
import { DropDown } from '../DropDown'
import useOutsideAlerter from '../../hook/UseOutside'

interface ButtonProps {
    color: string;
    text: string;
    width: number;
}
export const Navigation: React.FC<ButtonProps> = ({color, text, width}) => {
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
      <div className={styles.account} ref={ref} onClick={() => setIsShow(!isShow)}>
        <div className={styles.grozny_round}>
          <img src={account} alt="account"/>
        </div>
        {/*<div className={styles.dropdown}>*/}
          <p className={styles.p}>GrozMarket</p>
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

