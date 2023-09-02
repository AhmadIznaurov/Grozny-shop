import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import {chats} from "./redux/chatsReducer/action";
import {loadCards} from "./redux/homeAdvertisementReducer/action";
import {loadAddress, loadDesc, loadLargeImage, loadPhone, loadPrice, loadTitle} from "./redux/openAdvertisement/action";

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter >
    <Provider store={store}>
      <App
          chats={chats}
          loadCards={loadCards}
          loadAddress={loadAddress}
          loadDesc={loadDesc}
          loadLargeImage={loadLargeImage}
          loadPhone={loadPhone}
          loadPrice={loadPrice}
          loadTitle={loadTitle}
      />
    </Provider>
  </BrowserRouter>
);