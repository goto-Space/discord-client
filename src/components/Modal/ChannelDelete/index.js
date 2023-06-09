import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetSelectedChannel } from '../../../redux/selectedChannel/slice';
import { resetSelectedChat } from '../../../redux/selectedChat/slice';
import { URL } from '../../../utils/constants/index';
import { deleteChannel } from '../../../utils/api/deleteChannel';
import Colors from '../../../styles/Colors';
import { useSelectedChannel } from '../../../hooks/index';
import Modal from '..';
import { AlertWrapper } from './style';

export default function ChannelDeleteModal({ controller, removeChannel }) {
  const groupID = 1234;
  const selectedChannel = useSelectedChannel();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCurrentChannel = async () => {
    if (!selectedChannel.id) return;
    const response = await deleteChannel({
      groupID,
      channelType: selectedChannel.type,
      channelID: selectedChannel.id,
    });
    removeChannel(selectedChannel.name);
    controller.hide();
    if (response.status === 200) {
      dispatch(resetSelectedChannel());
      dispatch(resetSelectedChat());
      navigate(URL.GROUP(groupID), { replace: true });
    }
  };

  const AlertComponent = (
    <AlertWrapper>
      정말로
      {' '}
      <span>{selectedChannel.name}</span>
      {' '}
      채널을 삭제하시겠습니까?
    </AlertWrapper>
  );

  return (
    <Modal
      props={{
        title: '채널 삭제하기',
        middleContent: AlertComponent,
        bottomRightButton: {
          text: '삭제하기',
          color: Colors.Red,
          onClickHandler: deleteCurrentChannel,
        },
      }}
      controller={{ hide: controller.hide, show: controller.show }}
    />
  );
}
