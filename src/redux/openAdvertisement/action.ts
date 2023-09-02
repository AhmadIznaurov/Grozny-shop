import React from "react";

export const loadLargeImage: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/image/start'})
    fetch('http://localhost:8080/sliderImage')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/image/success',
          payload: data
        })
      })
  }
}

export const loadAddress: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/address/start'})
    fetch('http://localhost:8080/addresses')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/address/success',
          payload: data
        })
      })
  }
}

export const loadPhone: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/phone/start'})
    fetch('http://localhost:8080/phone')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/phone/success',
          payload: data
        })
      })
  }
}

export const loadDesc: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/desc/start'})
    fetch('http://localhost:8080/descriptionAdvertisement')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/desc/success',
          payload: data
        })
      })
  }
}

export const loadTitle: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/title/start'})
    fetch('http://localhost:8080/title')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/title/success',
          payload: data
        })
      })
  }
}

export const loadPrice: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/price/start'})
    fetch('http://localhost:8080/price')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/price/success',
          payload: data
        })
      })
  }
}