import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger/src'
import thunk from 'redux-thunk'



const logger = createLogger({
  diff: true,
  collapsed: true
})


const rootReducer = combineReducers({
  ////
})



export const store = createStore(rootReducer, applyMiddleware(thunk, logger))