import React from "react";

const initialState = {
  chats: [],
  loading: false,
}

interface chatsType {
  chats: any[]
  loading: boolean
}


export const chatsReducer: React.FC<chatsType> = (state = initialState, action) => {
  switch (action.type) {

    case 'load/chats/start':
      return {
        ...state,
        loading: true
      }

    case 'load/chats/success':
      return {
        ...state,
        loading: false,
        chats: action.payload
      }

    default:
      return state;
  }
}

