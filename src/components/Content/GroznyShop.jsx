import React from 'react'
import { Logo } from './Logo/Logo';
import styles from './content.module.css'
import { Search } from './Search/Search'
import { Services } from './Services/Services'
import { Recomendation } from './Recomendation/Recomendation'

export const GroznyShop = (props) => {
  return (
    <>
      <div className={styles.container}>
      <Logo />
      <Search />
    </div>
      <Services />
     <Recomendation />
    </>

  )
}

