import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger/src'
import thunk from 'redux-thunk'
import { AdvertisementReducer } from './homeAdvertisementReducer/advertisement'
import { openAdvertisementReducer } from './openAdvertisement/openAdvertisement'
import { sendDataReducer } from './SendDateReducer/SendDateReducer'
import { chatsReducer } from './chatsReducer/chatsReducer'
import React from "react";



interface loggerType {
  cards: number | string
  openCards: number | string
  sendData: number | string
  chats: number | string
}

const logger = createLogger({
  diff: true,
  collapsed: true
})

const rootReducer: React.FC<loggerType>  = combineReducers({
  cards: AdvertisementReducer ,
  openCards: openAdvertisementReducer,
  sendData: sendDataReducer,
  chats: chatsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

