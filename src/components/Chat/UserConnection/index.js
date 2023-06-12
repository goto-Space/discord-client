import React, { useState } from 'react';

import {
  UserConnectionWrapper, Text, UserTile,
} from './style';
import { getChannelById, getUserById } from '../../../utils/api';

function UserConnection({ channelId }) {
  const [users, setUsers] = useState([]);
  const getUser = async (userId) => {
    const userInfo = await getUserById(userId);
    const response = await userInfo.json();
    const { name } = response;
    return name;
  };
  const getInfo = async () => {
    const channelInfo = await getChannelById(channelId);
    const response = await channelInfo.json();
    const { userIds } = response;
    const newUsers = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const userId of userIds) {
      // eslint-disable-next-line no-await-in-loop
      const name = await getUser(userId);
      // if (!users.includes(name)) setUsers([...users, name]);
      newUsers.push(name);
      // setUsers([...users, name]);
    }
    setUsers(newUsers);
  };

  return (
    <UserConnectionWrapper>
      <Text>Online</Text>
      <UserTile onClick={getInfo}>
        <div />
        <div>눌러서 온라인인 사람들을 찾아보세요</div>
      </UserTile>
      {users.map((user) => (
        <UserTile>
          <div>
            <div className="on-line" />
          </div>
          <div>{user}</div>
        </UserTile>
      ))}
    </UserConnectionWrapper>
  );
}

export default UserConnection;
