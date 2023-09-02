import React, { useState } from 'react'
import styles from './add-adversitement.module.css';
import { Button } from '../components/Button/Button'
import { useDispatch } from 'react-redux'
import { SendDate } from '../redux/SendDateReducer/action'

interface AdvertisementType {
    nameOfAdvertisement: () => void
    image: string
    desc: string
    price: string
}

export const AddAdvertisement: React.FC<AdvertisementType> = () => {

  const [nameOfAdvertisement, setNameOfAdvertisement] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch()

  const handleClick = (): void => {
    dispatch(SendDate(nameOfAdvertisement, image, desc, price))
  }

  return (
    <div className='container-3'>
     <h1>Разместить объявление</h1>
      <div className={styles.title_adversitement}>
        <span>Название объявления</span>
        <input
          placeholder='Название объявления...'
          type='text'
          value={nameOfAdvertisement}
          onChange={(e) => setNameOfAdvertisement(e.target.value)}
        />
      </div>
      <div className={styles.photo_adversitement}>
        <span>Картинка объявления</span>
        <input
          placeholder='Картинка объявления...'
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={styles.description_adversitement}>
        <span>Описание</span>
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
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
        <input
          placeholder='Введите вашу цену...'
          type='text'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className={styles.button_adversitement}>
        <Button
          text='Отправить'
          color='white'
          width='200px'
          onSubmit={handleClick}
        />
      </div>
    </div>
  )
}

