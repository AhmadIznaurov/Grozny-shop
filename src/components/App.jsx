import React from 'react'
import { GroznyShop } from './Content/GroznyShop'
import { OpenAdverst } from '../Pages/OpenAdverst'
import { Message } from '../Pages/Message'
import {Routes, Route} from 'react-router-dom';
import { Layout } from './Layout'
import { AddAdvertisement } from '../Pages/AddAdvertisement'
import { MyAdversitement } from '../Pages/MyAdversitement'


export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<GroznyShop />} />
            <Route path='/advertisement' element={ <OpenAdverst />} />
            <Route path='/message' element={<Message />} />
            <Route path='/add/advertisement' element={<AddAdvertisement />}/>
            <Route path='/my/advertisement' element={<MyAdversitement />}/>
        </Route>
    </Routes>
</>
  )
}

