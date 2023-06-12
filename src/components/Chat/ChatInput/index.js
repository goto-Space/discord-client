import React, { useState } from 'react';

import { ChatInputWrapper, Button, Wrapper } from './style';

function ChatInput({ onInput }) {
  const [message, setMessage] = useState('');

  const onSubmitChat = () => {
    onInput('sender', message);
    setMessage('');
  };

  return (
    <Wrapper>
      <ChatInputWrapper>
        <input
          placeholder="Message to channel"
          type="text"
          maxLength={255}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </ChatInputWrapper>
      <Button onClick={onSubmitChat}>전송</Button>
    </Wrapper>
  );
}

export default ChatInput;
