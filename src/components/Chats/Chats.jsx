import React from 'react';
import styles from '../../Pages/Message.module.css';
import {Chats_item} from './Chats-mock';
import { Chat } from './Chat'

export const Chats = (props) => {
  return (
    <>
      {Chats_item.map((chat) => <Chat chat={chat}/>)}
    </>
  )
}

