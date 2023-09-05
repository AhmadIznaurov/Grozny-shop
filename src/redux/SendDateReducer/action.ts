import React from "react";
import { serverUrl } from '../../serverUrl';



interface SendDateType {
  image:    any[] | undefined
  desc:     any[] | undefined
  price:    any[] | undefined
  nameOfAdvertisement:  () => void
}

export const SendDate: React.FC<SendDateType> = ({nameOfAdvertisement, image, desc, price}) => {
  return async (dispatch: any) => {
    dispatch({type: 'send/data/start'})
    await fetch(`${serverUrl}/advertisement`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: nameOfAdvertisement,
        price: price,
        image: image,
        date: 'Сегодня в 20:30',
        location: 'Грозный'
      })
    })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'send/data/success',
            payload: data
          })
        })
  }
}