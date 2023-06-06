import React, { useState } from 'react';

import { useSelectedChannel } from '../../../hooks/index';
import Colors from '../../../styles/Colors';
import Modal from '..';
import { Input } from './style';
import { postJoinChannel } from '../../../utils/api/postJoinChannel';

function ChannelInviteModal({ controller: { hide, show } }) {
  const selectedChannel = useSelectedChannel();
  const [userId, setUserId] = useState('');
  const updateUserId = (newUserId: string) => {
    setUserId(newUserId);
  };

  const joinChannel = async () => {
    await postJoinChannel({ userId, channelId: selectedChannel.id });
  };

  const InputComponent = (
    <Input
      onChange={(e) => updateUserId(e.target.value)}
      placeholder="유저 아이디를 입력해주세요"
      value={userId}
    />
  );

  return (
    <Modal
      props={{
        title: '채널 초대',
        middleContent: InputComponent,
        bottomRightButton: {
          text: '채널 초대하기',
          color: Colors.Blue,
          onClickHandler: joinChannel,
        },
      }}
      controller={{ hide, show }}
    />
  );
}

export default ChannelInviteModal;
