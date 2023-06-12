import React from 'react';

// import { useDispatch } from 'react-redux';
import {
  ChatWrapper, ChatHeader, ChatContent,
} from './style';
// import { setSelectedChat } from '../../../../redux/selectedChat/slice';

// 이미지 추가 필요
function ChatItem({ chatData, newFetched }) {
  const {
    senderName,
    content,
    createdAt,
  } = chatData;
  // const dispatch = useDispatch();

  // const selectedChat = () => dispatch(setSelectedChat(chatData));

  return (
    <ChatWrapper
      className={newFetched ? 'newFetched' : ''}
    >
      <div />
      <div>
        <ChatHeader>
          <div>{senderName}</div>
          <div>{createdAt}</div>
        </ChatHeader>
        <ChatContent>{content}</ChatContent>
      </div>
    </ChatWrapper>
  );
}

export default ChatItem;
