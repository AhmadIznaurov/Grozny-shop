import React from 'react'
import styles from './header.module.css'

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <ul >
        <li>Для бизнеса</li>
        <li>Grozny-shop info</li>
        <li>Вакансии</li>
        <li>Помощь</li>
        <li>Каталоги</li>
      </ul>
    </div>

  )
}

