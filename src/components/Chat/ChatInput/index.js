import React, { useRef } from 'react';

import { ChatInputWrapper } from './style';

function ChatInput() {
  const chatInputRef = useRef();

  return (
    <ChatInputWrapper>
      <input ref={chatInputRef} placeholder="Message to channel" type="text" maxLength={255} />
    </ChatInputWrapper>

  );
}

export default ChatInput;
