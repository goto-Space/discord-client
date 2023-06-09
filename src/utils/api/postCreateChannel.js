import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

export const postCreateChannel = ({
  channelType,
  channelName,
}: {
  channelType: 'TEXT' | 'VOICE_ONLY' | 'VIDEO';
  channelName: string;
// eslint-disable-next-line max-len
}) => fetch(API_URL.CHANNEL.POST_CREATE_CHANNEL, postFetchOptions({ channelType, channelName }));
