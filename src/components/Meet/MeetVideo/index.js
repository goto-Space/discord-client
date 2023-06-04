import React from 'react';

import OtherVideo from './OtherVideo';
import MyVideo from './MyVideo';
import { Videos, VideoSection } from './style';

function MeetVideo() {
  const videoCount = 0;
  const { mic, cam, speaker } = true;

  return (
    <VideoSection>
      <Videos videoCount={videoCount || 0}>
        <MyVideo
          cam={cam}
          mic={mic}
          speaker={speaker}
        />
        <OtherVideo />
      </Videos>
    </VideoSection>
  );
}

export default MeetVideo;
