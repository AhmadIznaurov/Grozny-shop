import React from 'react';
import {Button} from '../../Button';
import styles from './../content.module.css';

export const Search = (props) => {
  return (
    <div className={styles.search}>
     <div className={styles.input_search}>
       <input type="text" placeholder='Поиск по объявлениям'/>
     </div>
      <div>
        <Button text={'Найти'} color={'white'} width='200px'/>
      </div>
    </div>
  )
}

