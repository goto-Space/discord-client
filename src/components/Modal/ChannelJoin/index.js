import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetSelectedChannel } from '../../../redux/selectedChannel/slice';
import { postJoinChannel } from '../../../utils/api/index';
import Colors from '../../../styles/Colors';
import { resetSelectedChat } from '../../../redux/selectedChat/slice';
import { TOAST_MESSAGE, URL } from '../../../utils/constants/index';
import Modal from '..';
import { Input } from './style';
import { useToast } from '../../../hooks/index';

function ChannelJoinModal({ controller: { hide, show }, channelType }) {
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
    const response = await postJoinChannel({ channelCode });
    switch (response.status) {
      case 200:
        // eslint-disable-next-line no-case-declarations
        const channel = await response.json();
        dispatch(resetSelectedChannel());
        dispatch(resetSelectedChat());
        finishModal();
        navigate(URL.GROUP(channel.id), { replace: true });
        fireToast({ message: TOAST_MESSAGE.SUCCESS.GROUP_INVITATION, type: 'success' });
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
