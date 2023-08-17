import React from 'react'
import { Input } from '../components/Input/Input';
import styles from './add-adversitement.module.css';
import { Button } from '../components/Button/Button'


export const AddAdvertisement = (props) => {
  return (
    <div className='container-3'>
     <h1>Разместить объявление</h1>
      <div className={styles.title_adversitement}>
        <span>Название объявления</span>
        <Input placeholder='Название объявления...' width='700px'/>
      </div>
      <div className={styles.photo_adversitement}>
        <span>Картинка объявления</span>
        <Input placeholder='Картинка объявления...' width='700px'/>
      </div>
      <div className={styles.description_adversitement}>
        <span>Описание</span>
        <textarea />
      </div>
      <div className={styles.price_adversitement}>
        <span>Цена</span>
        <select>
          <option disabled>цена</option>
          <option value="1000₽">1000₽</option>
          <option value="2000₽">2000₽</option>
          <option value="3000₽">3000₽</option>
          <option value="4000₽">4000₽</option>
          <option value="5000₽">5000₽</option>
          <option value="6000₽">6000₽</option>
          <option value="7000₽">7000₽</option>
        </select>

        <p>Введите свою цену</p>
        <Input placeholder='Сумма' type='number' width='700px'/>
      </div>

      <div className={styles.button_adversitement}>
        <Button text='Отправить' color='white' width='200px'/>
      </div>
    </div>
  )
}

