import React from 'react';
import styles from './Adversitement.module.css';
import avertImage from '../../assets/Lincode_courses.png'

export const Adversitement: React.FC = (props) => {
  return (
    <div className={styles.adversitement}>
      <h1>Мои объявления</h1>
      <br/>
      <br/>
      <div className={styles.border_bottom}>
        <div className={styles.active_and_archive}>
        <span className={styles.actived}>Активные</span>
        <span className={styles.archived}>Архив</span>
      </div>
      </div>
        <div className={styles.adversitement_parent}>
          <div className={styles.adversitement_image}>
            <img src={avertImage} alt="advert_image"/>
          </div>
          <div className={styles.adversitement_text}>
            <p className={styles.course}>Курсы программирования
              (Frontend-разработка)</p>
            <p className={styles.price}>35.000₽ за услугу</p>
            <p className={styles.location}>Чеченская Республика, Грозный</p>
          </div>
      </div>
    </div>
  )
}

