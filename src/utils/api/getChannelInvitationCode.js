import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const getChannelInvitationCode = ({ channelId }) => fetch(API_URL.CHANNEL.GET_CHANNEL_INVITATION_CODE(channelId));
