import React from 'react';
import styles from './title_price.module.css';

export const TitleAndPrice = () => {
  return (
    <div className={styles.title_price_container}>
      <div className='title'>
       <h1>2-к. квартира, 67,8 м², 7/22 эт.</h1>
      </div>
      <div className='price'>
        <p>4 607 000 ₽</p>
        <p>67 950 ₽ за м²</p>
      </div>
    </div>
  )
}


