import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

export const postCreateChannel = ({
  userID,
  channelType,
  channelName,
}: {
  userID: number;
  channelType: 'chatting' | 'voice' | 'meeting';
  channelName: string;
// eslint-disable-next-line max-len
}) => fetch(API_URL.GROUP.POST_CREATE_CHANNEL(userID), postFetchOptions({ channelType, channelName }));
