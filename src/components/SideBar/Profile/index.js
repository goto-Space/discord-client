import React from 'react';
// import UserInformationModal from '@components/Modal/UserInformation';
// import UserEditModal from '@components/Modal/UserEdit';
import {
  CameraOnIcon,
  MicOnIcon,
  SpeakerOnIcon,
} from '../../common/Icons';
import { DeviceControl, ProfileWrapper } from './style';
import { useSelectedUser } from '../../../hooks';

function Profile() {
  const user = useSelectedUser();
  return (
    <ProfileWrapper>
      <div>
        <div />
        <p>{user.name}</p>
      </div>
      <DeviceControl>
        <div>
          <MicOnIcon />
        </div>
        <div>
          <SpeakerOnIcon />
        </div>
        <div>
          <CameraOnIcon />
        </div>
      </DeviceControl>
    </ProfileWrapper>
  );
}

export default Profile;
