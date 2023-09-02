import React from 'react';
import { Card } from './Card'
import styles from './cards.module.css';
import { useSelector } from 'react-redux'


export  const Cards: React.FC = () => {

  const cards = useSelector((state) => state.cards.cards)

  return (
    <div className={styles.cards_container}>
      {
        cards.map((card) =>
             <Card card={card} key={card.id}/>
        )}
    </div>
  )
}

