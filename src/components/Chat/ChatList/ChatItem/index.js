import React from 'react';

import {
  ChatWrapper, UserImage, ChatHeader, ChatContent,
} from './style';

// 이미지 추가 필요
function ChatItem({ chatData, newFetched }) {
  const {
    createdAt,
    content,
  } = chatData;

  return (
    <ChatWrapper
      className={newFetched ? 'newFetched' : ''}
    >
      <UserImage
        src="/images/default_profile.png"
        alt="user profile"
      />
      <div>
        <ChatHeader>
          <div>UserName</div>
          <div>{new Date(createdAt).toLocaleTimeString('ko-KR').slice(0, -3)}</div>
        </ChatHeader>
        <ChatContent>{content}</ChatContent>
      </div>
    </ChatWrapper>
  );
}

export default ChatItem;
