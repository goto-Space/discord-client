import React, { useState } from 'react';

import LogoutModal from '../Modal/Logout';
import { ChannelChattingIcon } from '../common/Icons';
import { ChannelHeaderWrapper, ChannelHeaderLeft, ChannelHeaderRight } from './style';

function ChannelHeader() {
  const name = 'Shin';
  const [tryLogout, setTryLogOut] = useState(false);

  const logOutModalControl = {
    hide: () => setTryLogOut(false),
    show: () => setTryLogOut(true),
  };

  return (
    <>
      <ChannelHeaderWrapper>
        <ChannelHeaderLeft>
          {name !== '' ? (
            <>
              <ChannelChattingIcon />
              <p>{name}</p>
            </>
          ) : (
            ''
          )}
        </ChannelHeaderLeft>
        <ChannelHeaderRight>
          <div>
            <p>gotoSpace</p>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
            jsx-a11y/no-noninteractive-element-interactions */}
            <p onClick={() => setTryLogOut(!tryLogout)}>LogOut</p>
          </div>
        </ChannelHeaderRight>
      </ChannelHeaderWrapper>
      {tryLogout && <LogoutModal controller={logOutModalControl} />}
    </>
  );
}

export default ChannelHeader;
