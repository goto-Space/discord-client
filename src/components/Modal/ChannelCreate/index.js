import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSelectedChannel } from '../../../redux/selectedChannel/slice';
import Colors from '../../../styles/Colors';
import { CHANNEL_TYPE, URL, TOAST_MESSAGE } from '../../../utils/constants/index';
import { postCreateChannel } from '../../../utils/api/index';
// import { ChannelChattingIcon, ChannelMeetingIcon } from '../../common/Icons';
// import ChannelTypeItem from './ChannelTypeItem';
import Modal from '..';
import { Label, Wrapper, Input } from './style';
import { useToast } from '../../../hooks';
/*
      <Label>채널 유형</Label>
<ChannelTypeItem
        setChannelType={setChannelType}
        channelType={CHANNEL_TYPE.CHATTING}
        isSelected={channelType === CHANNEL_TYPE.CHATTING}
        icon={<ChannelChattingIcon />}
        title="채팅 채널"
        subTitle="메시지를 보내요"
      />
      <ChannelTypeItem
        setChannelType={setChannelType}
        channelType={CHANNEL_TYPE.VOICE}
        isSelected={channelType === CHANNEL_TYPE.VOICE}
        icon={<ChannelMeetingIcon />}
        title="보이스 채널"
        subTitle="대화해요"
      />
      <ChannelTypeItem
        setChannelType={setChannelType}
        channelType={CHANNEL_TYPE.MEETING}
        isSelected={channelType === CHANNEL_TYPE.MEETING}
        icon={<ChannelMeetingIcon />}
        title="화상 채널"
        subTitle="화상통화해요"
      />
 */
// UserID
export default function ChannelCreateModal({ channelType, controller, addChannel }) {
  const userID = 1234;
  const [channelName, setChannelName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { fireToast } = useToast();

  // eslint-disable-next-line consistent-return
  const createChannel = async () => {
    const response = await postCreateChannel({
      channelType,
      channelName,
    });
    if (response.status !== 201) {
      return fireToast({ message: TOAST_MESSAGE.ERROR.CHANNEL_CREATE, type: 'warning' });
    }
    try {
      const createdChannel = await response.json();
      controller.hide();
      const tempChannel = { name: channelName, id: createdChannel.channelId };
      addChannel(tempChannel);
      if (channelType === CHANNEL_TYPE.CHATTING) {
        navigate(URL.CHANNEL(userID, channelType, createdChannel.channelId), { replace: true });
        dispatch(
          setSelectedChannel({
            type: channelType,
            id: createdChannel.channelId,
            name: channelName,
          }),
        );
      }
    } catch (e) {
      fireToast({ message: TOAST_MESSAGE.ERROR.CHANNEL_CREATE, type: 'warning' });
    }
  };
  const ChannelCreateForm = (
    <Wrapper>
      <Label>채널 이름</Label>
      <Input
        onChange={(e) => {
          setChannelName(e.target.value);
        }}
      />
    </Wrapper>
  );
  return (
    <Modal
      props={{
        title: `${channelType} 채널 만들기`,
        middleContent: ChannelCreateForm,
        bottomRightButton: {
          text: '만들기',
          color: Colors.Blue,
          onClickHandler: createChannel,
        },
      }}
      controller={controller}
    />
  );
}
