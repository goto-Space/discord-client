import React, { useState } from 'react';

import { ChannelAddIcon, ChannelOpenIcon } from '../../common/Icons';
import MeetingUserList from './MeetingUserList';
import ChannelListItem from './ChannelListItem';
import ChannelCreateModal from '../../Modal/ChannelCreate';
import { ChannelWrapper, ChannelType } from './style';

/*
interface MeetingUsers {
  [key: number]: MeetingUserData[];
}
*/

function Channels({ channelType }) {
  const name = '힘들다';
  const userCount = 3;
  // const [meetingUser, setMeetingUser] = useState < MeetingUsers > ({});
  // eslint-disable-next-line no-bitwise,no-self-compare
  const [channelToCreate, setChannelToCreate] = useState('chatting');
  const [showChannelCreateModal, setShowChannelCreateModal] = useState(false);
  const channelCreateModalController = {
    hide: () => setShowChannelCreateModal(false),
    show: () => setShowChannelCreateModal(true),
  };

  return (
    <ChannelWrapper>
      <>
        <ChannelType>
          <div>
            <ChannelOpenIcon />
            <p>
              {channelType.toUpperCase()}
              {' '}
              CHANNELS
            </p>
          </div>
          <ChannelAddIcon
            onClick={() => {
              setChannelToCreate(channelType);
              channelCreateModalController.show();
            }}
          />
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
            {(channelType === 'meeting' || channelType === 'voice') && (
            <MeetingUserList />
            )}
          </div>
        </ul>
        {channelToCreate && showChannelCreateModal && (
        <ChannelCreateModal
          initialChannelType={channelToCreate}
          controller={channelCreateModalController}
        />
        )}
      </>
    </ChannelWrapper>
  );
}

export default Channels;
