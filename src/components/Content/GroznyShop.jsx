import React from 'react'
import styles from './content.module.css'
import { Services } from './Services/Services'
import { Recomendation } from './Recomendation/Recomendation'
import { Logo } from './Logo/Logo'
import { Search } from './Search/Search'

export const GroznyShop = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <Search />
    </div>
     {/* <Services />*/}
     {/*<Recomendation />*/}
    </>
  )
}

