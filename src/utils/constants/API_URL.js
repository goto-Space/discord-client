const API_URL = {
  USER: {
    GET_USERDATA: '/api/user',
    GET_GROUPS: '/api/user/groups',
    GET_OTHER_USER_DATA: (userID: number) => `/api/user/${userID}/profile`,
    GET_PRESIGNED_URL: '/api/user/presignedurl',
    POST_SIGN_IN: '/api/users/login',
    POST_SIGN_OUT: '/api/user/signout',
    POST_SIGN_UP: '/api/users/signup',
    POST_EDIT_PROFILE: '/api/user/profile',
  },
  CHANNEL: {
    GET_BY_PAGE: (channelID: number) => (index: number, prevData: any) => {
      if (prevData && !prevData.length) return null;
      return `/api/channel/${channelID}?page=${index + 1}`;
    },
    GET_CHANNEL_INVITATION_CODE: (channelID: number) => `/api/channels/${channelID}/invitation-code`,
    GET_CHANNEL_BY_ID: (channelID: number) => `/api/channels/${channelID}`,
    POST_CHAT: (channelID: number) => `/api/channel/${channelID}/create`,
    POST_CREATE_CHANNEL: '/api/channels/',
    POST_JOIN: (InvitationCode: string) => `/api/channels/${InvitationCode}/join`,
    POST_CHAT_LIKE: (chatID: number) => `/api/chat/${chatID}/reaction`,
    DELETE_CHANNEL: (channelID: number) => `/api/channels/${channelID}`,
  },
  GROUP: {
    GET_MEMBERS: (groupID: number) => `/api/group/${groupID}/members`,
    POST_JOIN: '/api/group/join',
    POST_CREATE_GROUP: '/api/group/create',

    DELETE_GROUP: (groupID: number) => `/api/group/${groupID}`,
    DELETE_CHANNEL: (groupID: number, channelType: 'chatting' | 'meeting', channelID: number) => `/api/group/${groupID}/${channelType}/${channelID}`,
  },
  THREAD: {
    GET_DATA: (chatID: number) => `/api/chat/${chatID}/thread`,
    POST_CREATE: (chatID: number) => `/api/chat/${chatID}/thread/create`,
  },
};

export { API_URL };
