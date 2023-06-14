import React from 'react';
import { VoiceWrapper, Wrapper } from './style';
import UserConnection from '../Chat/UserConnection';
import { useSelectedChannel } from '../../hooks';

function Voice() {
  const { id: channelId } = useSelectedChannel();
  return (
    <Wrapper>
      <VoiceWrapper>
        <p>Voice</p>
      </VoiceWrapper>
      <UserConnection channelId={channelId} />
    </Wrapper>
  );
}

export default Voice;
