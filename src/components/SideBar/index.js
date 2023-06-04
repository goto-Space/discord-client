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
        <Channels channelType="chatting" />
        <Channels channelType="voice" />
        <Channels channelType="meeting" />
      </div>
      <Profile />
    </ChannelListWrapper>

  );
}

export default SideBar;
