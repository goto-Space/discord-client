import React from 'react';

import { MeetingUserListWrapper, MeetingUserProfileWrapper, MeetingUserProfile } from './style';

function MeetingUserList() {
  const name = '김산';
  const id = 'jongbumsin';
  return (
    <MeetingUserListWrapper>
      <MeetingUserProfileWrapper>
        <MeetingUserProfile
          src="/public/logo192.png"
          alt=""
        />
      </MeetingUserProfileWrapper>
      <p>{`${name}(${id})`}</p>
    </MeetingUserListWrapper>

  );
}

export default MeetingUserList;
