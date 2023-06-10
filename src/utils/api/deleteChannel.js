import { deleteFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

export const deleteChannel = ({
  channelID,
}: {
  channelID: number;
}) => fetch(API_URL.CHANNEL.DELETE_CHANNEL(channelID), deleteFetchOptions());
