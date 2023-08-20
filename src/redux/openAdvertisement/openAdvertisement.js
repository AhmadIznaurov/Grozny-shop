const initialState = {
  image: [],
  desc: [],
  address: [],
  phone: [],
  title: [],
  loading: false,
}


export const openAdvertisementReducer = (state = initialState, action) => {
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
        OpenCards: action.payload
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
        OpenCards: action.payload
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
        OpenCards: action.payload
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
        OpenCards: action.payload
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
        OpenCards: action.payload
      }
    default:
      return state;
  }
}
