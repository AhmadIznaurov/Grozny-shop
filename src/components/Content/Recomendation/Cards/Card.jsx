import React from 'react'
import styles from './cards.module.css'

export const Card = ({card}) => {
  return (
    <div className={styles.card_body}>
      <div className={styles.card_img}>
        <img src={card.image} alt="sell"/>
      </div>
      <div className={styles.card_title}>
        {card.title}
      </div>
      <div className={styles.card_price}>
        {card.price}
      </div>
      <div className={styles.card_location}>
        {card.location}
      </div>
      <div className={styles.card_date}>
        {card.date}
      </div>
    </div>
  )
}

