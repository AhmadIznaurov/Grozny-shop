import React, { useEffect } from 'react'
import { GroznyShop } from './Content/GroznyShop'
import { OpenAdverst } from '../Pages/OpenAdverst'
import { Message } from '../Pages/Message'
import {Routes, Route} from 'react-router-dom';
import { Layout } from './Layout'
import { AddAdvertisement } from '../Pages/AddAdvertisement'
import { MyAdversitement } from '../Pages/MyAdversitement'
import { useDispatch } from 'react-redux'
import { loadCards } from '../redux/homeAdvertisementReducer/action'
import {
  loadAddress,
  loadDesc,
  loadLargeImage,
  loadPhone,
  loadPrice,
  loadTitle
} from '../redux/openAdvertisement/action'
import { chats } from '../redux/chatsReducer/action'




export const App = () => {

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(loadCards());
    dispatch(loadDesc());
    dispatch(loadLargeImage())
    dispatch(loadAddress())
    dispatch(loadPhone())
    dispatch(loadTitle())
    dispatch(loadPrice())
    dispatch(chats())
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<GroznyShop />} />
            <Route path='/advertisement/:id?' element={ <OpenAdverst />} />
            <Route path='/message' element={<Message />} />
            <Route path='/add/advertisement' element={<AddAdvertisement />}/>
            <Route path='/my/advertisement' element={<MyAdversitement />}/>
        </Route>
    </Routes>
</>
  )
}


