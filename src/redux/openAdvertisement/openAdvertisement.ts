import React from "react";

const initialState = {
  image: [],
  desc: [],
  address: [],
  phone: [],
  title: [],
  price: [],
  loading: false,
}

interface AdvertisementType {
  image:    string | any[],
  desc:     string | any[],
  address:  string | any[],
  phone:    string | any[],
  title:    string | any[],
  price:    string | any[],
  loading:  boolean,
}

export const openAdvertisementReducer: React.FC<AdvertisementType> = (state = initialState, action) => {
  switch(action.type){

    case 'load/image/start':
      return {
        ...state,
        loading: true
      }

    case 'load/image/success':
      return {
        ...state,
        loading: false,
        image: action.payload
      }

    case 'load/desc/start':
      return {
        ...state,
        loading: true
      }

    case 'load/desc/success':
      return {
        ...state,
        loading: false,
        desc: action.payload
      }

    case 'load/address/start':
      return {
        ...state,
        loading: true
      }

    case 'load/address/success':
      return {
        ...state,
        loading: false,
        address: action.payload
      }

    case 'load/phone/start':
      return {
        ...state,
        loading: true
      }

    case 'load/phone/success':
      return {
        ...state,
        loading: false,
        phone: action.payload
      }

    case 'load/title/start':
      return {
        ...state,
        loading: true
      }

    case 'load/title/success':
      return {
        ...state,
        loading: false,
        title: action.payload
      }

    case 'load/price/start':
      return {
        ...state,
        loading: true
      }

    case 'load/price/success':
      return {
        ...state,
        loading: false,
        price: action.payload
      }
    default:
      return state;
  }
}
