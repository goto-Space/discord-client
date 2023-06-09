import React, { useState } from 'react';

import { ChannelAddIcon, ChannelOpenIcon, GroupAddIcon } from '../../common/Icons';
import MeetingUserList from './MeetingUserList';
import ChannelListItem from './ChannelListItem';
import ChannelCreateModal from '../../Modal/ChannelCreate';
import ChannelDeleteModal from '../../Modal/ChannelDelete';
import ChannelInviteModal from '../../Modal/ChannelInvite';
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

  const [showChannelDeleteModal, setShowChannelDeleteModal] = useState(false);
  const channelDeleteModalController = {
    hide: () => setShowChannelDeleteModal(false),
    show: () => setShowChannelDeleteModal(true),
  };

  const [showChannelInviteModal, setShowChannelInviteModal] = useState(false);
  const channelInviteModalController = {
    hide: () => setShowChannelInviteModal(false),
    show: () => setShowChannelInviteModal(true),
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
          <GroupAddIcon
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
              showChannelDeleteModal={channelDeleteModalController.show}
              showChannelInviteModal={channelInviteModalController.show}
            />
            <ChannelListItem
              meetingUserCount={userCount}
              channelType={channelType}
              name={name}
              showChannelDeleteModal={channelDeleteModalController.show}
              showChannelInviteModal={channelInviteModalController.show}
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
        {showChannelDeleteModal && (
          <ChannelDeleteModal controller={channelDeleteModalController} />
        )}
        {showChannelInviteModal && (
          <ChannelInviteModal controller={channelInviteModalController} />
        )}
      </>
    </ChannelWrapper>
  );
}

export default Channels;
