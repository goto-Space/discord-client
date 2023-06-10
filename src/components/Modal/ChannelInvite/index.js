import React from 'react';

import { useSelectedChannel, useToast } from '../../../hooks/index';
import { TOAST_MESSAGE } from '../../../utils/constants';
import Colors from '../../../styles/Colors';
import Modal from '..';
import { CodeWrapper } from './style';
import { getChannelInvitationCode } from '../../../utils/api';

function ChannelInviteModal({ controller: { hide, show } }) {
  const selectedChannel = useSelectedChannel();
  // const [channelCode, setchannelCode] = useState('');
  const { fireToast } = useToast();
  const channelId = selectedChannel.id;
  const code = '123';

  // eslint-disable-next-line consistent-return
  const getChannelCode = async () => {
    const response = await getChannelInvitationCode(channelId);
    if (response.status !== 200) {
      return fireToast({ message: TOAST_MESSAGE.ERROR.CHANNEL_CREATE, type: 'warning' });
    }
    try {
      const channelInvitationCode = await response.json();
      // setchannelCode(channelInvitationCode.invitationCode);
      return channelInvitationCode.invitationCode;
    } catch (e) {
      fireToast({ message: TOAST_MESSAGE.ERROR.CHANNEL_CREATE, type: 'warning' });
    }
  };

  const pasteGroupCode = async () => {
    try {
      await window.navigator.clipboard.writeText(code);
    } catch (error) {
      fireToast({ message: TOAST_MESSAGE.ERROR.GROUP_CODE_COPY, type: 'warning' });
    }
  };
  const CodeComponent = <CodeWrapper onClick={getChannelCode}>{code}</CodeWrapper>;

  return (
    <Modal
      props={{
        title: '채널 초대',
        middleContent: CodeComponent,
        bottomRightButton: {
          text: '초대 코드 복사하기',
          color: Colors.Blue,
          onClickHandler: pasteGroupCode,
        },
      }}
      controller={{ hide, show }}
    />
  );
}

export default ChannelInviteModal;
