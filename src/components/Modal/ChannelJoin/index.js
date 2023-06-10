import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSelectedChannel } from '../../../redux/selectedChannel/slice';
import { postJoinChannel, getChannelById } from '../../../utils/api/index';
import Colors from '../../../styles/Colors';
import { TOAST_MESSAGE, URL, CHANNEL_TYPE } from '../../../utils/constants/index';
import Modal from '..';
import { Input } from './style';
import { useToast } from '../../../hooks/index';

function ChannelJoinModal({ controller: { hide, show }, channelType, addChannel }) {
  const userId = 1234;
  const [channelCode, setChannelCode] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fireToast } = useToast();
  const updateChannelCode = (newChannelCode: string) => {
    setChannelCode(newChannelCode);
  };

  const finishModal = () => {
    setChannelCode('');
    hide();
  };

  const joinChannel = async () => {
    // Change this api
    const response = await postJoinChannel({
      channelType,
      channelCode,
    });
    switch (response.status) {
      case 200:
        // eslint-disable-next-line no-case-declarations
        try {
          const { channelId } = await response.json();
          const secResponse = await getChannelById(channelId);
          const channel = await secResponse.json();
          const newChannel = { name: channel.name, id: channel.id };

          finishModal();
          addChannel(newChannel);
          if (channelType === CHANNEL_TYPE.CHATTING) {
            navigate(URL.CHANNEL(userId, channelType, newChannel.id), { replace: true });
            dispatch(
              setSelectedChannel({
                type: channelType,
                id: newChannel.id,
                name: newChannel.name,
              }),
            );
          }

          fireToast({ message: TOAST_MESSAGE.SUCCESS.GROUP_INVITATION, type: 'success' });
          // Channel add => Change logic
        } catch (e) {
          fireToast({ message: TOAST_MESSAGE.ERROR.GROUP_INVITATION, type: 'warning' });
        }
        break;
      case 400:
        // eslint-disable-next-line no-case-declarations
        const responseText = await response.text();
        fireToast({ message: responseText, type: 'warning' });
        break;
      default:
        fireToast({ message: TOAST_MESSAGE.ERROR.GROUP_INVITATION, type: 'warning' });
    }
  };

  const InputComponent = (
    <Input
      onChange={(e) => updateChannelCode(e.target.value)}
      placeholder="채널 코드를 입력해주세요"
      value={channelCode}
    />
  );
  return (
    <Modal
      props={{
        title: `${channelType}채널 참가`,
        subTitle: '초대 코드를 입력하세요',
        middleContent: InputComponent,
        bottomRightButton: {
          text: '채널 참가하기',
          color: Colors.Blue,
          onClickHandler: joinChannel,
        },
      }}
      controller={{ hide: finishModal, show }}
    />
  );
}

export default ChannelJoinModal;
