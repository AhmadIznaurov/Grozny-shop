import React, { useEffect } from 'react'
import { GroznyShop } from './Content/GroznyShop'
import { OpenAdverst } from '../Pages/OpenAdverst'
import { Message } from '../Pages/Message'
import {Routes, Route} from 'react-router-dom';
import { Layout } from './Layout'
import { AddAdvertisement } from '../Pages/AddAdvertisement'
import { MyAdversitement } from '../Pages/MyAdversitement'


import {
  loadAddress,
  loadDesc,
  loadLargeImage,
  loadPhone,
  loadPrice,
  loadTitle
} from '../redux/openAdvertisement/action'
import { chats } from '../redux/chatsReducer/action'
import {loadCards} from "../redux/homeAdvertisementReducer/action";
import {useDispatch} from "react-redux";

type LoadCardsFunction = (dispatch: (action: any) => void) => void;


interface EffectType {
  loadCards: LoadCardsFunction
  loadDesc: LoadCardsFunction
  loadLargeImage: LoadCardsFunction
  loadAddress: LoadCardsFunction
  loadPhone: LoadCardsFunction
  loadTitle: LoadCardsFunction
  loadPrice: LoadCardsFunction
  chats: LoadCardsFunction
}



export const App: React.FC<EffectType> = () => {

  const dispatch: any | undefined = useDispatch();



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

