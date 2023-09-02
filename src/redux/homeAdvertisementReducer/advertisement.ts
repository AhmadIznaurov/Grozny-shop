import React from "react";

const initialState = {
  cards: [],
  loadingCards: false,
}

interface cardsType {
  cards: any[]
  loadingCards: boolean
}

export const AdvertisementReducer: React.FC<cardsType> = (state = initialState, action) => {
  switch (action.type) {

    case 'load/cards/start':
      return {
        ...state,
        loadingCards: true
      }

    case 'load/cards/success':
      return {
        ...state,
        loadingCards: false,
        cards: action.payload
      }

    default:
      return state;
  }
}
