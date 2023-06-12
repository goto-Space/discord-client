import React, { Suspense } from 'react';
import { useSelectedChannel } from '../../hooks';
import ChannelHeader from '../../components/ChannelHeader';
import Chat from '../../components/Chat';
import SideBar from '../../components/SideBar';
import Empty from '../../components/common/Empty';
import Meet from '../../components/Meet';
import { EmptyWrapper, Layout, MainWrapper } from './style';

const EMPTY_MESSAGE = '채널을 고르세요';
/*
        {selectedChannel.type === 'chatting' ? (<Empty message={EMPTY_MESSAGE} />)
          : (selectedChannel === 'chat' ? <Chat /> : <Meet />)}
 */
function Main() {
  const selectedChannel = useSelectedChannel();

  return (
    <Layout>
      <SideBar />
      <MainWrapper>
        <ChannelHeader />
        {selectedChannel.type ? (
          <Suspense fallback={<Empty message="Loading..." />}>
            {selectedChannel.type === 'TEXT' ? (<Chat channelId={selectedChannel.id} />)
              : (selectedChannel.type === 'VIDEO' ? <Meet /> : <Empty message="Voice" />)}
          </Suspense>
        )
          : (
            <EmptyWrapper>
              {' '}
              <Empty message={EMPTY_MESSAGE} />
              {' '}
            </EmptyWrapper>
          )}

      </MainWrapper>
    </Layout>
  );
}

export default Main;
