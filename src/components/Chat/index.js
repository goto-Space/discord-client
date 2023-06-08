/* eslint-disable object-curly-newline */
import React, { useCallback, useRef } from 'react';

import { useChatInfinite, useChatSocket, useScroll, useSelectedChat } from '@hooks/index';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import { ChatWrapper, Wrapper, ChatInputWrapper } from './style';

function Chat() {
  const chatListRef = useRef(null);
  const { scrollToBottom } = useScroll(chatListRef);
  const selectedChat = useSelectedChat();
  const { chats, observedTarget } = useChatInfinite(chatListRef);

  useChatSocket(chatListRef);

  const onInput = useCallback(() => scrollToBottom({ smooth: true }), [scrollToBottom]);

  return (
    <Wrapper>
      <ChatWrapper isSelectedChat={!!selectedChat}>
        <ChatList
          chats={chats}
          chatListRef={chatListRef}
          observedTarget={observedTarget}
          onMount={scrollToBottom}
        />
        <ChatInputWrapper>
          <ChatInput onInput={onInput} />
        </ChatInputWrapper>
      </ChatWrapper>
    </Wrapper>
  );
}

export default Chat;
