import { io } from 'socket.io-client';

import { SOCKET } from './constants/index';

export const socket = io();

const joinChannel = ({ channelType, id }) => socket.emit(SOCKET.CHANNEL_EVENT.JOIN_CHANNEL, channelType + id);

const leaveChannel = ({ channelType, id }) => socket.emit(SOCKET.CHANNEL_EVENT.LEAVE_CHANNEL, channelType + id);

export const Socket = { socket, joinChannel, leaveChannel };
