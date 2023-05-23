import React from 'react';
// import UserInformationModal from '@components/Modal/UserInformation';
// import UserEditModal from '@components/Modal/UserEdit';
import {
  CameraOnIcon,
  MicOnIcon,
  SpeakerOnIcon,
} from '../../common/Icons';
import { DeviceControl, ProfileWrapper } from './style';

function Profile() {
  return (
    <ProfileWrapper>
      <div>
        <div>
          <img src="/public/logo192.png" alt="" />
        </div>
        <p>김산</p>
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
