import React from 'react';

import { ChannelChattingIcon } from '../common/Icons';
import { ChannelHeaderWrapper, ChannelHeaderLeft, ChannelHeaderRight } from './style';

function ChannelHeader() {
  const name = 'Shin';

  return (
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
          <p>LogOut</p>
        </div>
      </ChannelHeaderRight>
    </ChannelHeaderWrapper>
  );
}

export default ChannelHeader;
