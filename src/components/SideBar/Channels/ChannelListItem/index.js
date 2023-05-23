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
        {channelType === 'meeting' ? (
          <ChannelMeetingIcon />
        ) : channelType === 'chatting' ? (
          <ChannelChattingIcon />
        ) : null}
        <p>{name}</p>
      </div>
      {channelType === 'meeting' && !!meetingUserCount && (
        <ChannelMeetingCount meetingUserCount={meetingUserCount} />
      )}
      <GroupDeleteIcon />
    </ListItem>
  );
}

export default ChannelListItem;
