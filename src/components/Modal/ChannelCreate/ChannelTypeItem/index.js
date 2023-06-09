import React, { ReactElement } from 'react';

import { CircleDeselectedIcon, CircleSelectedIcon } from '../../../common/Icons';
import { Wrapper, Title, SubTitle } from './style';

export default function ChannelTypeItem({
  isSelected,
  icon,
  title,
  subTitle,
  channelType,
  setChannelType,
}: {
  isSelected: boolean;
  icon: ReactElement;
  title: string;
  subTitle: string;
  channelType: 'chatting' | 'voice' | 'meeting';
  setChannelType: (channelType: 'chatting' | 'voice' | 'meeting') => void;
}): ReactElement {
  return (
    <Wrapper onClick={() => setChannelType(channelType)}>
      {isSelected ? <CircleSelectedIcon /> : <CircleDeselectedIcon />}
      {icon}
      <div>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </div>
    </Wrapper>
  );
}
