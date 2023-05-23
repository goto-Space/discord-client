import React from 'react';

import ChannelHeader from '../../components/ChannelHeader';
import Chat from '../../components/Chat';
// import Meet from '@components/Meet';
import SideBar from '../../components/SideBar';
// import Empty from '@components/common/Empty';
import { Layout, MainWrapper } from './style';

function Main() {
  return (
    <Layout>
      <SideBar />
      <MainWrapper>
        <ChannelHeader />
        <Chat />
      </MainWrapper>
    </Layout>
  );
}

export default Main;
