import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const postJoinChannel = ({
  channelType,
  channelId,
  channelCode,
}: {
  channelType: 'TEXT' | 'VOICE_ONLY' | 'VIDEO';
channelId: number;
channelCode: string;
}) => fetch(API_URL.CHANNEL.POST_JOIN(channelId), postFetchOptions({ channelType, channelCode }));
