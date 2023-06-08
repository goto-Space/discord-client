import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants/API_URL';

export const postChat = ({
  channelID,
  content,
  files,
}) => fetch(API_URL.CHANNEL.POST_CHAT(channelID), postFetchOptions({ content, files }));
