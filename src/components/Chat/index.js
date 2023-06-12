import React, {
  useEffect, useState,
} from 'react';

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import ChatInput from './ChatInput';
// import UserConnection from './UserConnection';
// import ChatItem from './ChatList/ChatItem';
import { ChatWrapper, Wrapper, ChatInputWrapper } from './style';
import { Chats } from './ChatList/style';
import ChatItem from './ChatList/ChatItem';
import { useSelectedChannel } from '../../hooks';
/*
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
 */
function Chat() {
  // const chatListRef = useRef < HTMLDivElement > (null);
  // const { scrollToBottom } = useScroll(chatListRef);
  // const { chats, observedTarget } = useChatInfinite(chatListRef);
  const { id: channelId } = useSelectedChannel();
  const sockJS = new SockJS('https://localhost:8443/stomp/chat');
  const stompClient = Stomp.over(sockJS);

  const [contents, setContents] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addMessage = (message) => {
    setContents([...contents, message]);
    console.log(contents);
  };

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe(`/sub/channels/${channelId}`, (data) => {
        const newMessage = JSON.parse(data.body);
        addMessage(newMessage);
      });
    });
  }, [addMessage, channelId, stompClient]);

  const onInput = (senderName, content) => {
    const newMessage = { senderName, channelId, content };
    // console.log(newMessage);
    stompClient.send('/pub/text', {}, JSON.stringify(newMessage));
  };

  // const onInput = useCallback(() => scrollToBottom({ smooth: true }), [scrollToBottom]);
  return (
    <Wrapper>
      <ChatWrapper>
        <Chats>
          {/* eslint-disable-next-line max-len */}
          {contents.map((cont) => (<ChatItem chatData={cont} />))}
        </Chats>
        <ChatInputWrapper>
          <ChatInput onInput={onInput} />
        </ChatInputWrapper>
      </ChatWrapper>
    </Wrapper>
  );
}

export default Chat;
