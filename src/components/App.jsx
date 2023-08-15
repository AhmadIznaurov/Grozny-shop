import React from 'react'
import { Header } from './Header/Header'
import { GroznyShop } from './Content/GroznyShop'
import { OpenAdverst } from '../Pages/OpenAdverst'
import { Logo } from './Content/Logo/Logo'
import { Search } from './Content/Search/Search'
import { Message } from '../Pages/Message'



export const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <GroznyShop />
        {/*<OpenAdverst />*/}
        <Message />
      </div>
    </>
  )
}

