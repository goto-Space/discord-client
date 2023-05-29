import React from 'react';
import { ChannelMeetingCountWrapper } from './style';

const MAX_MEETING_USER_COUNT = 5;

function ChannelMeetingCount({ meetingUserCount }) {
  return (
    <ChannelMeetingCountWrapper className="count">
      <p>
        <span>{meetingUserCount}</span>
        <span>/</span>
        <span>{MAX_MEETING_USER_COUNT}</span>
      </p>
    </ChannelMeetingCountWrapper>
  );
}

export default ChannelMeetingCount;
