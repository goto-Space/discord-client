import React, { useRef } from 'react';

import ChatInput from './ChatInput';
import UserConnection from './UserConnection';
import ChatList from './ChatList';
import { ChatWrapper, Wrapper, ChatInputWrapper } from './style';

function Chat() {
  const chatListRef = useRef < HTMLDivElement > (null);
  const chats = null;
  const observedTarget = null;

  return (
    <Wrapper>
      <ChatWrapper>
        <ChatList
          chats={chats}
          chatListRef={chatListRef}
          observedTarget={observedTarget}
        />
        <ChatInputWrapper>
          <ChatInput />
        </ChatInputWrapper>
      </ChatWrapper>
      <UserConnection />
    </Wrapper>
  );
}

export default Chat;
