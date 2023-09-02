import React from 'react';
import styles from './../content.module.css';
import { Cards } from './Cards/Cards'


export const Recomendation: React.FC  = () => {
  return (
    <div className={styles.recomendation_container}>
    <h1>Рекомендации для вас</h1>
      <Cards />
    </div>
  )
};

