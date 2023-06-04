import React from 'react';

import ChannelHeader from '../../components/ChannelHeader';
import Chat from '../../components/Chat';
// import Meet from '@components/Meet';
import SideBar from '../../components/SideBar';
import Empty from '../../components/common/Empty';
import { Layout, MainWrapper } from './style';

const EMPTY_MESSAGE = '빈화면';

function Main() {
  const selectedChannel = 'empty';
  return (
    <Layout>
      <SideBar />
      <MainWrapper>
        <ChannelHeader />
        {selectedChannel === 'empty' ? <Empty message={EMPTY_MESSAGE} /> : <Chat />}
      </MainWrapper>
    </Layout>
  );
}

export default Main;
