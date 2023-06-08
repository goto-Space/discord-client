import React from 'react';
import { makeChatSection } from '../../../utils/index';
import ChatItem from './ChatItem';
import { Chats, Section, StickyWrapper } from './style';

function ChatList({
  chats, chatListRef, observedTarget,
}) {
  const newFetched = false;

  return (
    <Chats ref={chatListRef}>
      <div ref={observedTarget} />
      {Object.entries(makeChatSection(chats)).map(([day, dayChats]) => (
        <Section key={day}>
          <StickyWrapper>
            <button type="button">{day}</button>
          </StickyWrapper>
          {dayChats.map((chat) => (
            <ChatItem key={chat.id} chatData={chat} newFetched={newFetched} />
          ))}
        </Section>
      ))}
    </Chats>
  );
}

export default ChatList;
