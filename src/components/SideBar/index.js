import React from 'react';

import Channels from './Channels';
import Profile from './Profile';
import { ChannelListWrapper } from './style';
/*
          <Channels channelType="chatting" />
          <Channels channelType="meeting" />
                <Profile />
 */
function SideBar() {
  return (
    <ChannelListWrapper>
      <div>
        <Channels channelType="TEXT" />
        <Channels channelType="VOICE_ONLY" />
        <Channels channelType="VIDEO" />
      </div>
      <Profile />
    </ChannelListWrapper>

  );
}

export default SideBar;
