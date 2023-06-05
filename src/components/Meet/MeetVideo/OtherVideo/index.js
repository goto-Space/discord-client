import React from 'react';

import { MicOffIcon, SpeakerOffIcon } from '../../../common/Icons';
import {
  VideoWrapper,
  Thumbnail,
  DeviceStatus,
  ThumbnailWrapper,
} from '../style';

function OtherVideo() {
  const username = 'by';
  const loginID = 'jong';
  const mic = true;
  const speaker = true;
  return (
    <VideoWrapper>
      <ThumbnailWrapper>
        <Thumbnail src="/public/images/gotoSpace_logo.jpg" alt="profile" />
      </ThumbnailWrapper>
      <p>{`${username}(${loginID})`}</p>
      <DeviceStatus>
        {mic || <MicOffIcon />}
        {speaker || <SpeakerOffIcon />}
      </DeviceStatus>
    </VideoWrapper>
  );
}
export default OtherVideo;
