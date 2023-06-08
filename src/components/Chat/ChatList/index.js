import React, { useEffect, useMemo } from 'react';
import { makeChatSection } from '../../../utils/index';
import ChatItem from './ChatItem';
import { Chats, Section, StickyWrapper } from './style';

function ChatList({
  chats, chatListRef, observedTarget, onMount,
}) {
  const isNewFetched = useMemo(() => {
    const IDMap = {};
    // eslint-disable-next-line no-return-assign
    chats?.[chats.length - 1].forEach((chat) => (IDMap[chat.id] = true));

    return IDMap;
  }, [chats]);

  useEffect(() => {
    onMount();
  }, [onMount]);

  return (
    <Chats ref={chatListRef}>
      <div ref={observedTarget} />
      {Object.entries(makeChatSection(chats)).map(([day, dayChats]) => (
        <Section key={day}>
          <StickyWrapper>
            <button>{day}</button>
          </StickyWrapper>
          {dayChats.map((chat) => (
            <ChatItem key={chat.id} chatData={chat} newFetched={isNewFetched?.[chat.id] ?? false} />
          ))}
        </Section>
      ))}
    </Chats>
  );
}

export default ChatList;
