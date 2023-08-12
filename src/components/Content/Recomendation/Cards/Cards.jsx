import React from 'react';
import { Card } from './Card'
import styles from './cards.module.css';
import {cards} from  './mock'

export  const Cards = (props) => {

  return (
    <div className={styles.cards_container}>
      {
        cards.map((card) => <Card card={card}/>
        )}
    </div>
  )
}

