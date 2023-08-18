import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger/src'
import thunk from 'redux-thunk'
import { AdvertisementReducer } from './homeAdvertisementReducer/advertisement'
import { openAdvertisementReducer } from './openAdvertisement/openAdvertisement'


const logger = createLogger({
  diff: true,
  collapsed: true
})

const rootReducer = combineReducers({
  cards: AdvertisementReducer,
  OpenCards: openAdvertisementReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))