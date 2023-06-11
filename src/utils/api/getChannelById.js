import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const getChannelById = (channelID: number) => fetch(API_URL.CHANNEL.GET_CHANNEL_BY_ID(channelID));
