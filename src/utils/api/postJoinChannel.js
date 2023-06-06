import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const postJoinChannel = ({ userId, channelId }) => fetch(API_URL.GROUP.POST_JOIN, postFetchOptions({ userId, channelId }));
