import React from 'react';
import { Chat } from './Chat'
import { useSelector } from 'react-redux'

export const Chats = (props) => {
  const chats = useSelector((state) => state.chats.chats)
  return (
    <>
      {chats.map((chat) => <Chat chat={chat}/>)}
    </>
  )
}

