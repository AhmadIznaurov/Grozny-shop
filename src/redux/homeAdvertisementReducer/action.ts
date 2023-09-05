import React from "react";
import { serverUrl } from '../../serverUrl';



export const loadCards: React.FC = () => {
  return async (dispatch) => {
      dispatch({type: 'load/cards/start'})
      await fetch(`${serverUrl}/advertisement`)
          .then((response) => response.json())
          .then((data) => {
              dispatch({
                  type: 'load/cards/success',
                  payload: data
              })
          })
  }
}