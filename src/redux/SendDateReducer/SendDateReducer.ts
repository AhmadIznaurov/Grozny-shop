import React from "react";

const initialState = {
  sendDate: [],
  loading: false,
}

interface SendDataType {
  sendDate: string | any[]
  loading:  boolean,
}

export const sendDataReducer: React.FC<SendDataType> = (state = initialState, action) => {
  switch (action.type) {

    case 'send/data/start':
      return {
        ...state,
        loading: true
      }

    case 'send/data/success':
      return {
        ...state,
        loading: false,
        sendDate: action.payload
      }

    default:
      return state;
  }
}
