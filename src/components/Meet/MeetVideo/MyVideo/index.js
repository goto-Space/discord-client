import React from 'react';

import { MicOffIcon, SpeakerOffIcon } from '../../../common/Icons';
import {
  VideoWrapper, ThumbnailWrapper, Thumbnail, DeviceStatus,
} from '../style';

interface MyVideoProps {
  cam: boolean;
  mic: boolean;
  speaker: boolean;
}

function MyVideo({
  cam, mic, speaker,
}: MyVideoProps) {
  const username = 'kimsan';
  const loginID = 'jongbumsin';
  return (
    <VideoWrapper>
      <ThumbnailWrapper>
        {cam || (
        <Thumbnail src="/public/images/gotoSpace_logo.jpg" alt="profile" />
        )}
      </ThumbnailWrapper>
      <p>{`${username}(${loginID})`}</p>
      <DeviceStatus>
        {mic || <MicOffIcon />}
        {speaker || <SpeakerOffIcon />}
      </DeviceStatus>
    </VideoWrapper>
  );
}

export default MyVideo;
