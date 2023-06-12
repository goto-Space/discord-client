import React from 'react';

// import { useDispatch } from 'react-redux';
import {
  ChatWrapper, UserImage, ChatHeader, ChatContent,
} from './style';
// import { setSelectedChat } from '../../../../redux/selectedChat/slice';

// 이미지 추가 필요
function ChatItem({ chatData, newFetched }) {
  const {
    senderName,
    content,
  } = chatData;
  // const dispatch = useDispatch();

  // const selectedChat = () => dispatch(setSelectedChat(chatData));

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
          <div>{senderName}</div>
          <div>{new Date().toLocaleTimeString('ko-KR').slice(0, -3)}</div>
        </ChatHeader>
        <ChatContent>{content}</ChatContent>
      </div>
    </ChatWrapper>
  );
}

export default ChatItem;
