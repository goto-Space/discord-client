import React, { useRef } from 'react';

// import { useSelectedChannel, useToast } from '@hooks/index';
// import { postChat } from '@api/index';
// import { uploadFile } from '@utils/index';
// import { TOAST_MESSAGE, STATUS_CODES } from '@constants/index';
import { ChatInputWrapper, Wrapper } from './style';

function ChatInput() {
  const chatInputRef = useRef < HTMLInputElement > (null);

  return (
    <Wrapper onSubmit>
      <ChatInputWrapper>
        <input ref={chatInputRef} placeholder="Message to channel" type="text" maxLength={255} />
      </ChatInputWrapper>
    </Wrapper>
  );
}

export default ChatInput;
