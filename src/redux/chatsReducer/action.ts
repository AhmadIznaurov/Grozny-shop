import React from "react";
import { serverUrl } from '../../serverUrl';



export const chats: React.FC = () => {
  return async (dispatch) => {
      dispatch({type: 'load/chats/start'})

      await fetch(`${serverUrl}/chats`)
          .then((response) => response.json())
          .then((data) => {
              dispatch({
                  type: 'load/chats/success',
                  payload: data
              })
          })
  }
}