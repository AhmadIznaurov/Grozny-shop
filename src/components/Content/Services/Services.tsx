import React from 'react';
import styles from './../content.module.css';


export const Services: React.FC = () => {
  return (
    <div className={styles.services_container}>
      <div><span>Авто</span></div>
      <div><span>Работа</span></div>
      <div><span>Запчасти</span></div>
      <div><span>Товары для детей</span></div>
      <div><span>Недвижимость</span></div>
      <div><span>Услуги</span></div>
      <div><span>Животные</span></div>
      <div><span>Красота и здоровье</span></div>
    </div>
  )
}

