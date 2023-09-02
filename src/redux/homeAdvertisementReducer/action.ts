import React from "react";

export const loadCards: React.FC = () => {
  return (dispatch) => {
    dispatch({type: 'load/cards/start'})

    fetch('http://localhost:8080/advertisement')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'load/cards/success',
          payload: data
        })
      })
  }
}