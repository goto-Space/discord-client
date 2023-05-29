import React from 'react';

import {
  UserConnectionWrapper, Text, UserImage, UserTile,
} from './style';

function UserConnection() {
  return (
    <UserConnectionWrapper>
      <Text>Online</Text>
      <UserTile>
        <div>
          <UserImage
            src="/images/default_profile.png"
            alt="user profile"
          />
          <div className="on-line" />
        </div>
        <div>UserName</div>
      </UserTile>
    </UserConnectionWrapper>
  );
}

export default UserConnection;
