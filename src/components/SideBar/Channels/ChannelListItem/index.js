import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  ChannelChattingIcon, ChannelMeetingIcon, GroupDeleteIcon, ChannelAddIcon,
} from '../../../common/Icons';
import { useSelectedChannel } from '../../../../hooks/index';
import { URL } from '../../../../utils/constants/index';
import { ListItem } from './style';
import ChannelMeetingCount from './ChannelMeetingCount';
import { setSelectedChannel } from '../../../../redux/selectedChannel/slice';

const MAX_MEETING_USER_COUNT = 6;
function ChannelListItem({
  channelType,
  meetingUserCount,
  name,
  showChannelDeleteModal,
  showChannelInviteModal,
}) {
  const groupID = 1234;
  const { id, type } = useSelectedChannel();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const joinChannel = () => {
    if (meetingUserCount >= MAX_MEETING_USER_COUNT && channelType === 'meeting') return;
    navigate(URL.CHANNEL(groupID, channelType, id), { replace: true });
    dispatch(setSelectedChannel({ type: channelType, id, name }));
  };
  return (
    <ListItem
      onClick={joinChannel}
    >
      <div>
        {(channelType === 'meeting' || channelType === 'voice') ? (
          <ChannelMeetingIcon />
        ) : channelType === 'chatting' ? (
          <ChannelChattingIcon />
        ) : null}
        <p>{name}</p>
      </div>
      {(channelType === 'meeting' || channelType === 'voice') && !!meetingUserCount && (
        <ChannelMeetingCount meetingUserCount={meetingUserCount} />
      )}
      <ChannelAddIcon
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(setSelectedChannel({ type, id, name }));
          showChannelInviteModal();
        }}
      />
      <GroupDeleteIcon
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(setSelectedChannel({ type, id, name }));
          showChannelDeleteModal();
        }}
      />
    </ListItem>
  );
}

export default ChannelListItem;
