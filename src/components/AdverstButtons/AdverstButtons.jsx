import React from 'react';
import {Button} from '../Button/Button';
import styles from './buttons.module.css';
import heart from  '../../assets/heart-pages.svg';
import sorted from '../../assets/sorted.svg';

export const AdverstButtons = (props) => {
  return (
    <div className={styles.buttons_container}>
      <Button
        text='Добавить в избранное'
        color='white'
        width='200px'
        icon={heart}
      />

      <Button
        text='Сравнить'
        color='white'
        width='200px'
       icon={sorted}
      />
    </div>
  )
}

