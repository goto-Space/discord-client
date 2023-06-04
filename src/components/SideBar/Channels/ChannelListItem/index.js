import React from 'react';

import { ChannelChattingIcon, ChannelMeetingIcon, GroupDeleteIcon } from '../../../common/Icons';
import { ListItem } from './style';
import ChannelMeetingCount from './ChannelMeetingCount';

function ChannelListItem({
  channelType,
  meetingUserCount,
  name,
}) {
  return (
    <ListItem>
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
      <GroupDeleteIcon />
    </ListItem>
  );
}

export default ChannelListItem;
