import React from "react";
import { serverUrl } from '../../serverUrl';



export const loadLargeImage: React.FC = () => {
  return async (dispatch) => {
      dispatch({type: 'load/image/start'})
      await fetch(`${serverUrl}/sliderImage`)
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
  return async (dispatch) => {
      dispatch({type: 'load/address/start'})
      await fetch(`${serverUrl}/addresses`)
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
  return async (dispatch) => {
      dispatch({type: 'load/phone/start'})
      await fetch(`${serverUrl}/phone`)
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
  return async (dispatch) => {
      dispatch({type: 'load/desc/start'})
      await fetch(`${serverUrl}/descriptionAdvertisement`)
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
  return async (dispatch) => {
      dispatch({type: 'load/title/start'})
      await fetch(`${serverUrl}/title`)
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
  return async (dispatch) => {
      dispatch({type: 'load/price/start'})
      await fetch(`${serverUrl}/price`)
          .then((response) => response.json())
          .then((data) => {
              dispatch({
                  type: 'load/price/success',
                  payload: data
              })
          })
  }
}