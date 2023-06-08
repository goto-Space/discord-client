import React, { useRef, useState } from 'react';

import { postChat } from '../../../utils/api/index';
import { TOAST_MESSAGE, STATUS_CODES } from '../../../utils/constants/index';
import { useSelectedChannel, useToast } from '../../../hooks/index';
import { ChatInputWrapper, Wrapper } from './style';

function ChatInput({ onInput }) {
  const { id } = useSelectedChannel();
  const { fireToast } = useToast();
  const chatInputRef = useRef(null);

  const [fileURL, setFileURL] = useState([]);
  const onSubmitChat = async (e) => {
    e.preventDefault();
    try {
      if (chatInputRef.current === null) return;
      const content = chatInputRef.current ? chatInputRef.current.value.trim() : '';
      if ((content === '' && !fileURL.length) || id === null) return;
      chatInputRef.current.value = '';
      setFileURL([]);
      const response = await postChat({ channelID: id, content, files: fileURL });
      if (response.status !== STATUS_CODES.OK) throw Error(TOAST_MESSAGE.ERROR.POST_CHAT_FAIL);
      onInput();
    } catch ({ message }) {
      fireToast({ message: TOAST_MESSAGE.ERROR.POST_CHAT_FAIL, type: 'warning' });
      console.error(message);
    }
  };

  return (
    <Wrapper onSubmit={onSubmitChat}>
      <ChatInputWrapper>
        <input ref={chatInputRef} placeholder="Message to channel" type="text" maxLength={255} />
      </ChatInputWrapper>
    </Wrapper>
  );
}

export default ChatInput;
