import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const postJoinChannel = ({
  channelType,
  channelCode,
}: {
  channelType: 'TEXT' | 'VOICE_ONLY' | 'VIDEO';
channelCode: string;
}) => fetch(API_URL.CHANNEL.POST_JOIN(channelCode), postFetchOptions({ channelType }));
