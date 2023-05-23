import React from 'react';

import { ChannelAddIcon, ChannelOpenIcon } from '../../common/Icons';
import MeetingUserList from './MeetingUserList';
import ChannelListItem from './ChannelListItem';
import { ChannelWrapper, ChannelType } from './style';

function Channels({ channelType }) {
  const name = '힘들다';
  const userCount = 3;

  return (
    <ChannelWrapper>
      <ChannelType>
        <div>
          <ChannelOpenIcon />
          <p>
            {channelType.toUpperCase()}
            {' '}
            CHANNELS
          </p>
        </div>
        <ChannelAddIcon />
      </ChannelType>
      <ul>
        <div>
          <ChannelListItem
            meetingUserCount={userCount}
            channelType={channelType}
            name={name}
          />
          <ChannelListItem
            meetingUserCount={userCount}
            channelType={channelType}
            name={name}
          />
          {channelType === 'meeting' && (
            <MeetingUserList />
          )}
        </div>
      </ul>
    </ChannelWrapper>
  );
}

export default Channels;
