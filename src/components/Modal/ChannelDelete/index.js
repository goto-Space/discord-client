import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetSelectedChannel } from '../../../redux/selectedChannel/slice';
import { resetSelectedChat } from '../../../redux/selectedChat/slice';
import { URL, TOAST_MESSAGE } from '../../../utils/constants/index';
import { deleteChannel } from '../../../utils/api';
import Colors from '../../../styles/Colors';
import { useSelectedChannel, useToast } from '../../../hooks/index';
import Modal from '..';
import { AlertWrapper } from './style';

export default function ChannelDeleteModal({ controller, removeChannel }) {
  const groupID = 1234;
  const { id, name } = useSelectedChannel();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { fireToast } = useToast();

  const deleteCurrentChannel = async () => {
    if (!id) return;
    try {
      const response = await deleteChannel({
        channelID: id,
      });
      if (response.status === 200) {
        removeChannel(id);
        controller.hide();
        dispatch(resetSelectedChannel());
        dispatch(resetSelectedChat());
        navigate(URL.GROUP(groupID), { replace: true });
      } else {
        fireToast({ message: TOAST_MESSAGE.ERROR.COMMON, type: 'warning' });
      }
    } catch (e) {
      fireToast({ message: TOAST_MESSAGE.ERROR.COMMON, type: 'warning' });
    }
  };

  const AlertComponent = (
    <AlertWrapper>
      정말로
      {' '}
      <span>{name}</span>
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
