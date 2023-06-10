import React, { useState } from 'react';

import { ChannelAddIcon, ChannelOpenIcon, GroupAddIcon } from '../../common/Icons';
import MeetingUserList from './MeetingUserList';
import ChannelListItem from './ChannelListItem';
import ChannelCreateModal from '../../Modal/ChannelCreate';
import ChannelDeleteModal from '../../Modal/ChannelDelete';
import ChannelInviteModal from '../../Modal/ChannelInvite';
import ChannelJoinModal from '../../Modal/ChannelJoin';
import { ChannelWrapper, ChannelType } from './style';

/*
interface MeetingUsers {
  [key: number]: MeetingUserData[];
}
*/

function Channels({ channelType }) {
  const userCount = 3;
  const [channels, setChannels] = useState([]);
  // const [meetingUser, setMeetingUser] = useState < MeetingUsers > ({});
  // eslint-disable-next-line no-bitwise,no-self-compare
  // const [channelToCreate, setChannelToCreate] = useState('TEXT');
  const [showChannelCreateModal, setShowChannelCreateModal] = useState(false);
  const channelCreateModalController = {
    hide: () => setShowChannelCreateModal(false),
    show: () => setShowChannelCreateModal(true),
  };
  const [showChannelJoinModal, setShowChannelJoinModal] = useState(false);
  const channelJoinModalController = {
    hide: () => setShowChannelJoinModal(false),
    show: () => setShowChannelJoinModal(true),
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

  const addChannel = (channel) => {
    setChannels([...channels, channel]);
  };

  const deleteChannel = (name) => {
    setChannels(channels.filter((channel) => channel.name !== name));
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
              channelJoinModalController.show();
            }}
          />
          <GroupAddIcon
            onClick={() => {
              channelCreateModalController.show();
            }}
          />
        </ChannelType>
        <ul>
          {channels.map((channel) => (
            <div key={channel.id}>
              <ChannelListItem
                meetingUserCount={userCount}
                channelType={channelType}
                id={channel.id}
                name={channel.name}
                showChannelDeleteModal={channelDeleteModalController.show}
                showChannelInviteModal={channelInviteModalController.show}
              />
              {(channelType === 'VOICE_ONLY') && (
                <MeetingUserList />)}
            </div>
          ))}
        </ul>
        {showChannelCreateModal && (
        <ChannelCreateModal
          channelType={channelType}
          controller={channelCreateModalController}
          addChannel={addChannel}
        />
        )}
        {showChannelDeleteModal && (
          <ChannelDeleteModal
            controller={channelDeleteModalController}
            removeChannel={deleteChannel}
          />
        )}
        {showChannelInviteModal && (
          <ChannelInviteModal controller={channelInviteModalController} />
        )}
        {showChannelJoinModal && (<ChannelJoinModal controller={channelJoinModalController} />)}
      </>
    </ChannelWrapper>
  );
}

export default Channels;
