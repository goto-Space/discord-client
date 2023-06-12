import React from 'react';
// import { makeChatSection } from '../../../utils/index';
import ChatItem from './ChatItem';
import { Chats } from './style';

function ChatList({
  chats,
}) {
  return (
    <Chats>
      <div />
      {chats?.map((chat) => (
        <ChatItem chatData={chat} newFetched={false} />
      ))}
    </Chats>
  );
}

export default ChatList;
