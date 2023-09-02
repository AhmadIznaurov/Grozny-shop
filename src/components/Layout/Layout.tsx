import React from 'react'
import { Header } from '../Header/Header'
import { Logo } from '../Content/Logo/Logo'
import { Search } from '../Content/Search/Search'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = ({color, text, width}) => {
  return (
    <>
      <Header  color={color} text={text} width={width}/>
      <div className='container'>
        <Logo />
        <Search />
      </div>

      <Outlet />

      <Footer />
    </>
  )
}


