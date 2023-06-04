import React from 'react';

import ChannelHeader from '../../components/ChannelHeader';
import Chat from '../../components/Chat';
import SideBar from '../../components/SideBar';
import Empty from '../../components/common/Empty';
import Meet from '../../components/Meet';
import { Layout, MainWrapper } from './style';

const EMPTY_MESSAGE = '채널을 고르세요';

function Main() {
  const selectedChannel = 'empt';
  return (
    <Layout>
      <SideBar />
      <MainWrapper>
        <ChannelHeader />
        {selectedChannel === 'empty' ? (<Empty message={EMPTY_MESSAGE} />)
          : (selectedChannel === 'chat' ? <Chat /> : <Meet />)}
      </MainWrapper>
    </Layout>
  );
}

export default Main;
