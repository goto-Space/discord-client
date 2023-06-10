import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const getChannelInvitationCode = ({ channelID }: {channelID: number}) => fetch(API_URL.CHANNEL.GET_CHANNEL_INVITATION_CODE(channelID));
