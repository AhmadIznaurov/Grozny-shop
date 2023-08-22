export const SendDate = (nameOfAdvertisement, image, desc, price) => {
  return (dispatch) => {
    dispatch({type: 'send/data/start'})

    fetch('http://localhost:8080/advertisement', {
      method: 'POST',
      headers: {
        "Content-Type":  "application/json",
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